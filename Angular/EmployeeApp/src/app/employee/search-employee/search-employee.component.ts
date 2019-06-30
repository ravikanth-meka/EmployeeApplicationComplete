import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {
  searchedEmployee: Employee ;
  dispError: any = "none";

  constructor(private _route:ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  searchEmployee( empno: string): void { 
    this.searchedEmployee = null;  
    this.dispError = "none";
    console.log("searching for : " + empno);
    this.employeeService.searchEmployee(empno).subscribe(
      (data : Employee) =>{
        this.searchedEmployee = data
        console.log(data);
      },
      (error: any) => {
        this.dispError = error
        console.log(this.dispError)
      } 
    );
  }



  searchEmployeeErrHandling(empno: string){
    const resolvedData: Employee | string  = this._route.snapshot.data['searchedEmployee'];

    
  }

}
