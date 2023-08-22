package com.javatechie.springbootcrudexample.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javatechie.springbootcrudexample.entity.User;
import com.javatechie.springbootcrudexample.repository.UserRepository;
import com.javatechie.springbootcrudexample.service.UserService;

@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private UserService userService;

    @PostMapping("/signUp")
    public ResponseEntity<String> signUp(@RequestBody User user) {
        try {
            userRepository.save(user);
            return ResponseEntity.ok("User registered successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to register user.");
        }
    }
    
    @PostMapping("/login")
    public User login(@RequestBody User user) {
        User loggedInUser = userService.findByUsernameAndPassword(user.getUsername(), user.getPassword());
        if (loggedInUser != null) {
             ResponseEntity.ok(loggedInUser); 
             return loggedInUser;// Return the user, including role, in the response
        } else {
            return null;
        }
    }
    
}
