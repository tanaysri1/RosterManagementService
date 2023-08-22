package com.javatechie.springbootcrudexample.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.javatechie.springbootcrudexample.entity.Product;


public interface ProductRepository extends JpaRepository<Product, Integer> {

	Product findByName(String name);

}
