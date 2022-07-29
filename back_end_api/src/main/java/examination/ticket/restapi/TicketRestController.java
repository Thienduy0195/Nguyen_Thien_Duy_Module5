package examination.ticket.restapi;

import examination.ticket.models.Company;
import examination.ticket.models.Ticket;
import examination.ticket.service.ICompanyService;
import examination.ticket.service.ITicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
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
    public ResponseEntity<Page<Ticket>> getPageTicket(@PageableDefault(size = 5) Pageable pageable) {
        Page<Ticket> tickets = this.iTicketService.findAllPageable(pageable);
        if (!tickets.hasContent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
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
}
