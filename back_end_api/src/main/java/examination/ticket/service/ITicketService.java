package examination.ticket.service;

import examination.ticket.models.Ticket;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ITicketService {

    void save(Ticket ticket);

    Ticket findById(Integer id);

    void delete (Ticket ticket);

    void deleteById (Integer id);

    List<Ticket> findAll();

    Page<Ticket> search (Pageable pageable, String startDes, String endDes, String startDate);

    Page<Ticket> findAllPageable(Pageable pageable);
}
