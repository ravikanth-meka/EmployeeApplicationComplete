package com.javaworks.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.javaworks.entities.Department;
import com.javaworks.exception.ResourceNotFoundException;
import com.javaworks.repo.DepartmentRepository;

@RestController
@RequestMapping("department")
public class DepartmentController {
	
	@Autowired
	DepartmentRepository departmentRepository;
	
	@GetMapping
	public Department getDepartmentDetails(@RequestParam(value = "deptNo") int deptNo) {

		Department dept = departmentRepository.findByDeptNo(deptNo);
		// return new ResponseEntity<Customer>(customer, HttpStatus.OK);
		if (dept == null) {
			// https://www.baeldung.com/exception-handling-for-rest-with-spring  
			// Spring 5 introduced the ResponseStatusException class.                     ****************IMPORTANT
			// We can create an instance of it providing an HttpStatus and optionally a
			// reason and a cause:
			//throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Department Not Found");
			throw new ResourceNotFoundException("Department Not Found");
		}
		return dept;
		
	}
	
	
	@GetMapping("/alldepts")
	public List<Department> getAllDepartmentDetails() {
		List<Department> depts = departmentRepository.findAll();
		return depts;
	}

}
