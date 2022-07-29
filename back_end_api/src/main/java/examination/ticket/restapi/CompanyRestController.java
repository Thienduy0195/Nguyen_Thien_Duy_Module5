package examination.ticket.restapi;

import examination.ticket.models.Company;
import examination.ticket.service.ICompanyService;
import examination.ticket.service.ITicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/company")
public class CompanyRestController {

    @Autowired
    ICompanyService iCompanyService;


    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/list")
    public ResponseEntity<List<Company>> getCompanyList() {
        return new ResponseEntity<>(iCompanyService.findAll(), HttpStatus.OK);
    }
}
