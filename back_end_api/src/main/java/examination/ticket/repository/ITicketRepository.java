package examination.ticket.repository;

import examination.ticket.models.Ticket;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface ITicketRepository extends JpaRepository<Ticket, Integer> {

    @Query(value = "select * from ticket where start_des like :startDes and start_des like :startDes and startDate between :startDate", nativeQuery = true)
    Page<Ticket> searchObject(Pageable pageable);

}
