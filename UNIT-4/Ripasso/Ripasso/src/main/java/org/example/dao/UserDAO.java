package org.example.dao;

import org.example.entity.User;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;

public class UserDAO {
    private EntityManager em;

    public UserDAO(EntityManager em) {
        this.em = em;
    }

    public void save(User user) {
        EntityTransaction et = em.getTransaction();
        et.begin();
        em.persist(user);
        et.commit();
    }

    public User getById(Integer id) {
        return em.find(User.class, id);
    }

    public void delete(User user) {
        EntityTransaction et = em.getTransaction();
        et.begin();
        em.remove(user);
        et.commit();
    }
}
