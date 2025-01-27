package org.example.entity;

import javax.persistence.*;

@Entity
@Table(name = "biglietti")
public class Biglietto {
    @Id
    @GeneratedValue
    private Integer id;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Integer getId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Biglietto(User user) {
        this.user = user;
    }

    public Biglietto() {
    }

    @Override
    public String toString() {
        return "Biglietto{" +
                "id=" + id +
                '}';
    }
}
