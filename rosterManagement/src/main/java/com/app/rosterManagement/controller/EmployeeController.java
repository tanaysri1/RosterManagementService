package com.app.rosterManagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.rosterManagement.entity.Employee;
import com.app.rosterManagement.service.EmployeeService;

@RestController
public class EmployeeController {

	@Autowired
	EmployeeService service;
	
	@GetMapping("/")
	public List<Employee> getallEmployee()
	{
		return service.getAllEmployee();
	}
	
	@PostMapping("/addEmployee")
	public String addEmployee(Employee em)
	{
		
		return service.createEmployee(em);
	}
	
	@DeleteMapping("/deleteEmployee")
	public String deleteEmployeebyId(int id)
	{
		return service.deleteById(id);
	
	}
}
