package examination.ticket.service.impl;

import examination.ticket.models.Company;
import examination.ticket.repository.ICompanyRepository;
import examination.ticket.service.ICompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CompanyService implements ICompanyService {

    @Autowired
    private ICompanyRepository iCompanyRepository;

    @Override
    public Page<Company> findAll(Pageable pageable) {
        return this.iCompanyRepository.findAll(pageable);
    }
}
