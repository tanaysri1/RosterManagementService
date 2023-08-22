// RosterDetailsRepo.java
package com.javatechie.springbootcrudexample.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.javatechie.springbootcrudexample.entity.RosterDetails;

public interface RosterDetailsRepo extends JpaRepository<RosterDetails, Long> {
    // The deleteById method is inherited from JpaRepository
	
	

	
	
}
