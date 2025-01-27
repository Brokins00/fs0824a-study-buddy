package org.example.dao;

import org.example.entity.Biglietto;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;

public class BigliettoDAO {
    private EntityManager em;

    public BigliettoDAO(EntityManager em) {
        this.em = em;
    }

    public void save(Biglietto biglietto) {
        EntityTransaction et = em.getTransaction();
        et.begin();
        em.persist(biglietto);
        et.commit();
    }

    public Biglietto getById(Integer id) {
        return em.find(Biglietto.class, id);
    }

    public void delete(Biglietto biglietto) {
        EntityTransaction et = em.getTransaction();
        et.begin();
        em.remove(biglietto);
        et.commit();
    }
}
