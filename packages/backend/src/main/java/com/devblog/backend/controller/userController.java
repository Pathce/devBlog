package com.devblog.backend.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import com.devblog.backend.Service.UserService;
import com.devblog.backend.domain.User;

import java.time.LocalDateTime;

@Controller
public class UserController {
  private final UserService userService;

  public UserController(UserService userService) {
    this.userService = userService;
  }

  @PostMapping(value = "/create")
  @ResponseBody
  public User create(@RequestBody User form) {
    User user1 = new User();
    user1.setUserName(form.getUserName());
    user1.setUserId(form.getUserName());
    user1.setRegDate(LocalDateTime.now());

    userService.join(user1);
    return user1;
  }
}
