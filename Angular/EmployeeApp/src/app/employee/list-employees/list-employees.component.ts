import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../shared/services/employee.service'
import { EmployeeListResolverService } from './list-employees-resolver.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[] ;
  error: string;
  constructor(private _route:ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit() {
   // this.getAllEmployeeDetails();

    this.getAllEmployeeResolverDetails();
  }

  getAllEmployeeDetails(){
    this.employeeService.getAllEmployees()
    .subscribe(emps => this.employees = emps);
  }

  getAllEmployeeResolverDetails(){
    const resolvedData: Employee[] | string  = this._route.snapshot.data['employeeList'];

    if(Array.isArray(resolvedData))
    {
      this.employees = resolvedData;
    }
    else
    this.error = resolvedData;
  }
}

