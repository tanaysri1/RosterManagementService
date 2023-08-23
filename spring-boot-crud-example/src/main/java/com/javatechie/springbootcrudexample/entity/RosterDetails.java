package com.javatechie.springbootcrudexample.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "RosterDetails")
public class RosterDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long empid;

    @Column
    private String EmpName;
    
    @Column
    private String Date;
    
    @Column
    private String Shift_time;
    
    @Column
    private String Pickup_time;
    
    @Column
    private String Drop_time;
    
    @Column
    private String DriverName;
    
    @Column
    private String Vehicle_Number;
    
    @Column
    private String Location; // New field

    public RosterDetails() {
        super();
    }

    // Getter and setter methods for all fields

    public long getEmpid() {
        return empid;
    }

    public void setEmpid(long empid) {
        this.empid = empid;
    }

    public String getEmpName() {
        return EmpName;
    }

    public void setEmpName(String empName) {
        EmpName = empName;
    }

    public String getDate() {
        return Date;
    }

    public void setDate(String date) {
        Date = date;
    }

    public String getShift_time() {
        return Shift_time;
    }

    public void setShift_time(String shift_time) {
        Shift_time = shift_time;
    }

    public String getPickup_time() {
        return Pickup_time;
    }

    public void setPickup_time(String pickup_time) {
        Pickup_time = pickup_time;
    }

    public String getDrop_time() {
        return Drop_time;
    }

    public void setDrop_time(String drop_time) {
        Drop_time = drop_time;
    }

    public String getDriverName() {
        return DriverName;
    }

    public void setDriverName(String driverName) {
        DriverName = driverName;
    }

    public String getVehicle_Number() {
        return Vehicle_Number;
    }

    public void setVehicle_Number(String vehicle_Number) {
        Vehicle_Number = vehicle_Number;
    }

    public String getLocation() {
        return Location;
    }

    public void setLocation(String location) {
        Location = location;
    }
}
