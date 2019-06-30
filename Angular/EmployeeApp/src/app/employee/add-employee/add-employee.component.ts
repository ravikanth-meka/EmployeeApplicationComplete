import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { Department } from '../../models/department.model';
import { EmployeeService } from '../../shared/services/employee.service'

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = {
    empno: null,
    ename: null,
    job: null,
    mgr: null,
    hiredate: null,
    sal: null,
    comm: null,
    deptno: null
  };

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' },
    { id: 5, name: 'Admin' }
  ]

  minDate: Date;
  maxDate: Date;
  yrRange: string;

  previewPhoto = false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.maxDate = new Date();
    this.minDate = new Date(this.maxDate.getFullYear()-100, 0, 1);
    this.yrRange= this.minDate.getFullYear() +':'+ this.maxDate.getFullYear();
  }

  //saveEmploye(employeeForm: NgForm): void {
  saveEmploye( employee: Employee): void {    
    console.log(employee);
    const newEmployee : Employee = Object.assign({}, this.employee);
    this.employeeService.saveEmployee(newEmployee).subscribe(
      (data : Employee) =>{
        console.log(data);
      },
      (error: any) => console.log(error)
    );
   // this.employeeForm.reset();
   // this.router.navigate(['list']);


  }

  togglePhotoPreview(){
    this.previewPhoto = !this.previewPhoto;
  }



}
