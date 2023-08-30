package com.javatechie.springbootcrudexample.controller;

import com.javatechie.springbootcrudexample.entity.RosterDetails;
import com.javatechie.springbootcrudexample.entity.RosterDetails;
import com.javatechie.springbootcrudexample.service.RosterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/roster")
public class RosterController {

    @Autowired
    private RosterService rosterService;

    @GetMapping("/{id}")
    public ResponseEntity<RosterDetails> getRosterById(@PathVariable Long id) {
        RosterDetails rosterDetail = rosterService.getRosterById(id);
        if (rosterDetail != null) {
            return ResponseEntity.ok(rosterDetail);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteRosterById(@PathVariable Long id) {
        String result = rosterService.deleteRosterById(id);
        return ResponseEntity.ok(result);
    }

    @PostMapping("/create")
    public ResponseEntity<String> createRoster(@RequestBody RosterDetails rosterDetail) {
        String result = rosterService.createRoster(rosterDetail);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/all")
    public ResponseEntity<List<RosterDetails>> getAllRosterDetails() {
        List<RosterDetails> rosterDetails = rosterService.getAllRosterDetails();
        return ResponseEntity.ok(rosterDetails);
    }
    
    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateRoster(@PathVariable Long id, @RequestBody RosterDetails updatedRoster) {
        String result = rosterService.updateRoster(id, updatedRoster);
        return ResponseEntity.ok(result);
    }
}
