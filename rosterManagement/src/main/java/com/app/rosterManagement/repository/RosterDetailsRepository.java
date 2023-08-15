package com.app.rosterManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.rosterManagement.entity.RosterDetails;

@Repository
public interface RosterDetailsRepository extends JpaRepository<RosterDetails, Long> {

}
