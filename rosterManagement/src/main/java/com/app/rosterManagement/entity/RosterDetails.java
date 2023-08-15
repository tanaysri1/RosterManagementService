package com.app.rosterManagement.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class RosterDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long rosterId;

	@ManyToOne
	@JoinColumn(name = "employee_id")
	private Employee employee;

	@ManyToOne
	@JoinColumn(name = "shift_id")
	private Shift shift;

	private LocalDate date;

	public RosterDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

	public RosterDetails(Long rosterId, Employee employee, Shift shift, LocalDate date) {
		super();
		this.rosterId = rosterId;
		this.employee = employee;
		this.shift = shift;
		this.date = date;
	}

	public Long getRosterId() {
		return rosterId;
	}

	public void setRosterId(Long rosterId) {
		this.rosterId = rosterId;
	}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	public Shift getShift() {
		return shift;
	}

	public void setShift(Shift shift) {
		this.shift = shift;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

}
