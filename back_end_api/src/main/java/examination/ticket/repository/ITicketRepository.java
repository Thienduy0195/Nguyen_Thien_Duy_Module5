package examination.ticket.repository;

import examination.ticket.models.Ticket;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface ITicketRepository extends JpaRepository<Ticket, Integer> {

    @Query(value = "SELECT * FROM ticket WHERE (start_des LIKE :startDes AND end_des LIKE :endDes\n" +
            "                       AND start_date BETWEEN :startDate AND :endDate)", nativeQuery = true)
    Page<Ticket> search(@Param("startDes") String startDes, @Param("endDes") String endDes,
                        @Param("startDate") String startDate, @Param("endDate") String endDate, Pageable pageable);

}
