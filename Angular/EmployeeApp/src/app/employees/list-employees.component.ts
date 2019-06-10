import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../shared/services/employee.service'
@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[] ;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getAllEmployeeDetails();
  }

  getAllEmployeeDetails(){
    this.employeeService.getAllEmployees()
    .subscribe(emps => this.employees = emps);
  }

}
