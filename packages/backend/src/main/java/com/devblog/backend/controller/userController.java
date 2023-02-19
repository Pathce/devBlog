package com.devblog.backend.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import com.devblog.backend.User.Param;

@RestController
public class userController {

  @PostMapping("/test")
  public Param post(@RequestBody Param param) {
    Param param1 = new Param();
    param1.setName(param.getName());
    return param1;
  }
}