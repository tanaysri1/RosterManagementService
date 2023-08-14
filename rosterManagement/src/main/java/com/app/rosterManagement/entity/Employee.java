package com.app.rosterManagement.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "emp")
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	
	private int id;
	private int deptNo;
	private String address;
	private String inTime;
	private String outTime;
	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Employee(int id, int deptNo, String address, String inTime, String outTime) {
		super();
		this.id = id;
		this.deptNo = deptNo;
		this.address = address;
		this.inTime = inTime;
		this.outTime = outTime;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getDeptNo() {
		return deptNo;
	}
	public void setDeptNo(int deptNo) {
		this.deptNo = deptNo;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getInTime() {
		return inTime;
	}
	public void setIn(String in) {
		this.inTime = in;
	}
	public String getOutTime() {
		return outTime;
	}
	public void setOut(String out) {
		this.outTime = out;
	}
	@Override
	public String toString() {
		return "Employee [id=" + id + ", deptNo=" + deptNo + ", address=" + address + ", inTime=" + inTime + ", outTime=" + outTime
				+ "]";
	}
	
	
	
}
