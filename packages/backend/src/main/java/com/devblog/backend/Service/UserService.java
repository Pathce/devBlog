package com.devblog.backend.Service;

import com.devblog.backend.Repository.JpaUserRepository;
import com.devblog.backend.Repository.UserRepository;
import com.devblog.backend.domain.User;

import jakarta.transaction.Transactional;

@Transactional  // 서비스에 작성하여 항상 트랜잭션을 거쳐야 함.
public class UserService {
  private final UserRepository userRepository;

  public UserService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  public Integer join(User user) {
    userRepository.save(user);
    return user.getId();
  }
}
