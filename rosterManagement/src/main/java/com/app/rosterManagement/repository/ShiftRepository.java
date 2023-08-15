package com.app.rosterManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.rosterManagement.entity.Shift;

@Repository
public interface ShiftRepository extends JpaRepository<Shift, Long> {

}
