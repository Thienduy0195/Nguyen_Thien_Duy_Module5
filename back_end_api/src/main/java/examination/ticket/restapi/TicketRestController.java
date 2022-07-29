package examination.ticket.restapi;

import examination.ticket.models.Company;
import examination.ticket.models.Ticket;
import examination.ticket.service.ICompanyService;
import examination.ticket.service.ITicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/tickets")
public class TicketRestController {

    @Autowired
    ITicketService iTicketService;

    @Autowired
    ICompanyService iCompanyService;

    @GetMapping("/list")
    public ResponseEntity<Page<Ticket>> getPageTicket(Pageable pageable) {
        Page<Ticket> tickets = this.iTicketService.findAllPageable(pageable);
        if (!tickets.hasContent()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(tickets, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Map<String, String>> createTicket(@Validated @RequestBody Ticket ticket) {
        Company company = new Company();
        company.setId(ticket.getCompany().getId());
        company.setName(ticket.getCompany().getName());
        System.out.println(company.toString());
        ticket.setCompany(company);
        System.out.println("HERE");
        System.out.println(ticket.getCompany());
        this.iTicketService.save(ticket);
        System.out.println("HHKK");
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ticket> findById(@PathVariable("id") Integer id) {
        Ticket ticket = this.iTicketService.findById(id);
        if (ticket == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(ticket, HttpStatus.OK);
    }

    @PatchMapping(value = "update/{id}")
    public ResponseEntity<Map<String, String>> updateTicket(@PathVariable("id") Integer id,
                                                            @Validated @RequestBody Ticket ticket) {
        Company company = new Company();
        company.setId(ticket.getCompany().getId());
        company.setName(ticket.getCompany().getName());
        System.out.println(company);
        ticket.setId(id);
        ticket.setCompany(company);
        this.iTicketService.save(ticket);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteTicket(@PathVariable("id") Integer id) {
        Ticket ticket = this.iTicketService.findById(id);
        System.out.println(ticket);
        if (ticket == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        this.iTicketService.delete(ticket);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/search/{startDes}&{endDes}&{startDate}&{endDate}")
    public ResponseEntity<?> search(@PathVariable String startDes, @PathVariable String endDes,
                                    @PathVariable String startDate, @PathVariable String endDate,
                                    @RequestParam(name = "page", defaultValue = "0") int page) {
        Sort sort = Sort.by("id").ascending();
        Page<Ticket> tickets = this.iTicketService.search(startDes, endDes, startDate, endDate, PageRequest.of(page, 10, sort));
        if (tickets.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(tickets, HttpStatus.OK);
    }
}
