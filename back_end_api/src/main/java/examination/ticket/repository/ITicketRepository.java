package examination.ticket.repository;

import examination.ticket.models.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface ITicketRepository extends JpaRepository<Ticket, Integer> {
}
