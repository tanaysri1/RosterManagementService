package com.app.rosterManagement.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.rosterManagement.entity.Employee;
import com.app.rosterManagement.repository.EmployeeRepo;

@Service
public class EmployeeService {

	@Autowired
	EmployeeRepo emp;

	public List<Employee> getAllEmployee() {
		System.out.println("Enter in the Service");
		return emp.findAll();
	}

	public Employee getEmpById(int id) {
		return emp.findById(id).orElse(null);
	}

	public String createEmployee(Employee e) {

		emp.save(e);
		return "Created Employee with id number : " + e.getId();

	}

	public String deleteById(int id) {
		emp.deleteById(id);
		return "Employee Deleted with id number " + id;
	}
}
