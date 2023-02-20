package com.devblog.backend;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.devblog.backend.Repository.JpaUserRepository;
import com.devblog.backend.Repository.UserRepository;
import com.devblog.backend.Service.UserService;

import jakarta.persistence.EntityManager;
import javax.sql.DataSource;

@Configuration
public class SpringConfig {
  private final EntityManager em;

  public SpringConfig(EntityManager em) {
    this.em = em;
  }

  @Bean
  public UserService userService() {
    return new UserService(userRepository());
  }

  @Bean
  public UserRepository userRepository() {
    return new JpaUserRepository(em);
  }
}