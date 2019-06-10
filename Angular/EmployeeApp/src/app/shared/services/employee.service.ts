import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Employee } from '../../models/employee.model';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Observable<Employee[]>;
 /*  employees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@pragimtech.com',
      dateOfBirth: new Date('10/25/1988'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/mark.png'
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 2345978640,
      dateOfBirth: new Date('11/20/1979'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/mary.png'
    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 5432978640,
      dateOfBirth: new Date('3/25/1976'),
      department: 'IT',
      isActive: false,
      photoPath: 'assets/images/john.png'
    },
  ]; */

  constructor(private httpclient: HttpClient) {

  }

  ngOnInit() {
    /* let observable = this.httpclient.get('http://localhost:8082/employee/allemp');

    observable.subscribe(() => console.log('got the response')); */

  }

  getAllEmployees(): Observable<Employee[]> {

     this.employees = this.httpclient.get<Employee[]>('http://localhost:8082/employee/allemp')
      .pipe(
        catchError(this.handleError<Employee[]>('getAllEmployees', []))
      );
      return this.employees;

    /*  let observable = this.httpclient.get('localhost:8082/employee/allemp');
     observable.subscribe(response => {
       console.log(response.toString)
 
     }); */
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
