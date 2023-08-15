package com.app.rosterManagement.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Shift {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long shiftId;

	private LocalDateTime startTime;
	private LocalDateTime endTime;

	public Shift() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Shift(Long shiftId, LocalDateTime startTime, LocalDateTime endTime) {
		super();
		this.shiftId = shiftId;
		this.startTime = startTime;
		this.endTime = endTime;
	}

	public Long getShiftId() {
		return shiftId;
	}

	public void setShiftId(Long shiftId) {
		this.shiftId = shiftId;
	}

	public LocalDateTime getStartTime() {
		return startTime;
	}

	public void setStartTime(LocalDateTime startTime) {
		this.startTime = startTime;
	}

	public LocalDateTime getEndTime() {
		return endTime;
	}

	public void setEndTime(LocalDateTime endTime) {
		this.endTime = endTime;
	}

}
