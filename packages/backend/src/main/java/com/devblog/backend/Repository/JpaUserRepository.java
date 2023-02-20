package com.devblog.backend.Repository;

import com.devblog.backend.domain.User;

import jakarta.persistence.EntityManager;

public class JpaUserRepository implements UserRepository {
  private final EntityManager em;

  public JpaUserRepository(EntityManager em) {
    this.em = em;
  }

  public User save(User user) {
    em.persist(user);
    return user;
  }
}
