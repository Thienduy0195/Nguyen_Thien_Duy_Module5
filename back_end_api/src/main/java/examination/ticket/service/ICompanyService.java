package examination.ticket.service;

import examination.ticket.models.Company;

import java.util.List;

public interface ICompanyService {
    List<Company> findAll();
}
