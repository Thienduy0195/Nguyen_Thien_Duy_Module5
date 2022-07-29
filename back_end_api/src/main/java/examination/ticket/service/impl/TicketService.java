package examination.ticket.service.impl;

import examination.ticket.models.Ticket;
import examination.ticket.repository.ITicketRepository;
import examination.ticket.service.ITicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketService implements ITicketService {

    @Autowired
    ITicketRepository iTicketRepository;


    @Override
    public void save(Ticket ticket) {
        this.iTicketRepository.save(ticket);
    }

    @Override
    public Ticket findById(Integer id) {
        return this.iTicketRepository.findById(id).get();
    }

    @Override
    public void delete(Ticket ticket) {
        this.iTicketRepository.delete(ticket);
    }

    @Override
    public void deleteById(Integer id) {
        this.iTicketRepository.deleteById(id);
    }

    @Override
    public List<Ticket> findAll() {
        return this.iTicketRepository.findAll();
    }

    @Override
    public Page<Ticket> search(String startDes, String endDes, String startDate, String endDate, Pageable pageble) {
        return this.iTicketRepository.search("%" + startDes + "%", "%" + endDes + "%", startDate, endDate, pageble);
    }


    @Override
    public Page<Ticket> findAllPageable(Pageable pageable) {
        return this.iTicketRepository.findAll(pageable);
    }


}
