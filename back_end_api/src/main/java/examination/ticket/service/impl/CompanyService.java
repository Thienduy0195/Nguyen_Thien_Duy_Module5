package examination.ticket.service.impl;

import examination.ticket.models.Company;
import examination.ticket.repository.ICompanyRepository;
import examination.ticket.service.ICompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CompanyService implements ICompanyService {

    @Autowired
    ICompanyRepository iCompanyRepository;
    @Override
    public List<Company> findAll() {
        return this.iCompanyRepository.findAll();
    }
}
