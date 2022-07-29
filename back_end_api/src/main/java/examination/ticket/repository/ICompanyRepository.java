package examination.ticket.repository;

import examination.ticket.models.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface ICompanyRepository extends JpaRepository<Company, Integer> {
}
