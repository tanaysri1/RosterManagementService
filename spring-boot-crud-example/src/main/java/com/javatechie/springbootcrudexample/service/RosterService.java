package com.javatechie.springbootcrudexample.service;

import com.javatechie.springbootcrudexample.entity.RosterDetails;
import com.javatechie.springbootcrudexample.entity.RosterDetails;
import com.javatechie.springbootcrudexample.repository.RosterDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RosterService {

    @Autowired
    private RosterDetailsRepo rosterDetailsRepo;

    public RosterDetails getRosterById(Long id) {
        return rosterDetailsRepo.findById(id).orElse(null);
    }

    public String deleteRosterById(Long id) {
        rosterDetailsRepo.deleteById(id);
        return "Record deleted successfully";
    }

    public String createRoster(RosterDetails rosterDetail) {
        rosterDetailsRepo.save(rosterDetail);
        return "Record saved successfully";
    }

    public List<RosterDetails> getAllRosterDetails() {
        return rosterDetailsRepo.findAll();
    }

    
   
}
