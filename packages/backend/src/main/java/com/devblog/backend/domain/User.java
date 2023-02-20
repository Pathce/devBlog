package com.devblog.backend.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
public class User {
  
  @Id@GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String user_id, user_name, gender;

  private LocalDateTime regdate;

  public LocalDateTime getRegDate() {
    return regdate;
  }

  public void setRegDate(LocalDateTime regdate) {
    this.regdate = regdate;
  }

  public String getUserName() {
    return user_name;
  }

  public void setUserName(String user_name) {
    this.user_name = user_name;
  }

  public String getUserId() {
    return user_id;
  }

  public void setUserId(String user_id) {
    this.user_id = user_id;
  }

  public String getGender() {
    return gender;
  }

  public void setGender(String gender) {
    this.gender = gender;
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }
}
