package examination.ticket.service;

import examination.ticket.models.Company;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ICompanyService {
    Page<Company> findAll(Pageable pageable);
}
