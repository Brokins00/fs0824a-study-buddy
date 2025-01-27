package org.example.entity;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue()
    private Integer id;
    private String email;
    private String password;
    @OneToMany(mappedBy = "user")
    private List<Biglietto> biglietti;

    public User(String email, String password) {
        this.email = email;
        this.password = password;
        this.biglietti = new ArrayList<>();
    }

    public User() {
        this.biglietti = new ArrayList<>();
    }

    public Integer getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", biglietti=" + biglietti +
                '}';
    }
}
