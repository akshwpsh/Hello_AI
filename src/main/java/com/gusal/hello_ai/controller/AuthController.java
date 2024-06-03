package com.gusal.hello_ai.controller;

import com.gusal.hello_ai.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.gusal.hello_ai.service.UserService;

@RestController
public class AuthController {
    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public String signup(@RequestBody User user){
        try{
            userService.saveUser(user.getEmail(), user.getPassword(), user.getUsername());
            return "User registered successfully";
        } catch (Exception e) {
            return e.getMessage();
        }
    }
}
