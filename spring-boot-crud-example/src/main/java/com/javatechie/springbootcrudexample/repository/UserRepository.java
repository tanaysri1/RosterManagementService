package com.javatechie.springbootcrudexample.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.javatechie.springbootcrudexample.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    
	User findByUsernameAndPassword(String username, String password);
}
