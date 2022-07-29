package examination.ticket.models;

import javax.persistence.*;

@Entity
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String price;
    private String startDes;
    private String endDes;
    private String startDate;
    private String startHour;
    private String amount;

    @ManyToOne()
    @JoinColumn(name = "company_id", referencedColumnName = "company_id")
    private Company company;


    public Ticket() {
    }

    public Ticket(Integer id, String price, String startDes, String endDes, String startDate, String startHour, String amount, Company company) {
        this.id = id;
        this.price = price;
        this.startDes = startDes;
        this.endDes = endDes;
        this.startDate = startDate;
        this.startHour = startHour;
        this.amount = amount;
        this.company = company;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getStartDes() {
        return startDes;
    }

    public void setStartDes(String starDes) {
        this.startDes = starDes;
    }

    public String getEndDes() {
        return endDes;
    }

    public void setEndDes(String endDes) {
        this.endDes = endDes;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getStartHour() {
        return startHour;
    }

    public void setStartHour(String startHour) {
        this.startHour = startHour;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }
}
