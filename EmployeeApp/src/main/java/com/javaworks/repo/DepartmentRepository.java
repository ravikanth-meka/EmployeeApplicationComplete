package com.javaworks.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.javaworks.entities.Department;

@Repository
public interface DepartmentRepository extends CrudRepository<Department, Integer> {

	public List<Department> findAll() ;

	public Department findByDeptNo(int deptNo);
}
