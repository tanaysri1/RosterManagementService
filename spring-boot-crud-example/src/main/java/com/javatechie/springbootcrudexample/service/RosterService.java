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

    public String updateRoster(Long id, RosterDetails updatedRoster) {
        RosterDetails existingRoster = rosterDetailsRepo.findById(id).orElse(null);
        if (existingRoster != null) {
            existingRoster.setEmpid(updatedRoster.getEmpid());
            existingRoster.setDate(updatedRoster.getDate());
            existingRoster.setDriverName(updatedRoster.getDriverName());
            existingRoster.setPickup_time(updatedRoster.getPickup_time());
            existingRoster.setDrop_time(updatedRoster.getDrop_time());
            existingRoster.setVehicle_Number(updatedRoster.getVehicle_Number());
            existingRoster.setLocation(existingRoster.getLocation());
            existingRoster.setShift_time(existingRoster.getShift_time());
            existingRoster.setEmpName(existingRoster.getEmpName());
            rosterDetailsRepo.save(existingRoster);
            return "Record updated successfully";
        } else {
            return "Record not found";
        }
    
   
}
}
