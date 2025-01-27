package org.example;

import org.example.dao.BigliettoDAO;
import org.example.dao.UserDAO;
import org.example.entity.Biglietto;
import org.example.entity.User;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class Main {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("u4ripasso");
        EntityManager em = emf.createEntityManager();

        UserDAO userDAO = new UserDAO(em);
        BigliettoDAO bigliettoDAO = new BigliettoDAO(em);

//        User user = new User();
//        user.setEmail("test@test.com");
//        user.setPassword("asdrubale");
//
//        userDAO.save(user);
//
//        Biglietto biglietto = new Biglietto();
//        biglietto.setUser(user);
//        bigliettoDAO.save(biglietto);

        User user2 = userDAO.getById(2);
        if (user2 != null) {
            System.out.println(user2);
//            userDAO.delete(user);
        }

    }
}