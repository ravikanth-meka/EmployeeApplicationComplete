package com.javaworks.controllers;

import java.util.List;

import org.apache.http.HttpStatus;
import org.hibernate.exception.ConstraintViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.javaworks.entities.Employee;
import com.javaworks.exception.ResourceNotFoundException;
import com.javaworks.exception.ResponseStatusException;
import com.javaworks.repo.EmployeeRepository;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("employee")
public class EmployeeController {
	
	@Autowired
	EmployeeRepository employeeRepository;
	
	@GetMapping
	public Employee getEmployeeDetails(@RequestParam(value = "empno") int empno) {

		Employee emp = employeeRepository.findByEmpno(empno);
		// return new ResponseEntity<Customer>(customer, HttpStatus.OK);
		if (emp == null) {
			// https://www.baeldung.com/exception-handling-for-rest-with-spring  
			// Spring 5 introduced the ResponseStatusException class.                     ****************IMPORTANT
			// We can create an instance of it providing an HttpStatus and optionally a
			// reason and a cause:
			//throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Department Not Found");
			throw new ResourceNotFoundException("Employee Not Found");
		}
		return emp;
		
	}
	
	@PostMapping
	public Employee addNewCustomer(@RequestBody Employee newEmployee) {
		try {
			employeeRepository.save(newEmployee);
		} catch (DataIntegrityViolationException | ConstraintViolationException e) {
			throw new ResponseStatusException("Employee already exist", e);
		} catch (Exception e) {
			e.printStackTrace();
			throw new ResponseStatusException("Employee already exist", e);
		}
		return newEmployee;
	}
	
	
	@GetMapping("/allemp")
	public List<Employee> getAllDepartmentDetails() {
		List<Employee> employees = employeeRepository.findAll();
		return employees;
	}

}
