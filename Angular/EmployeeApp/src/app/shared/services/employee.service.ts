import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Employee } from '../../models/employee.model';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap, startWith } from 'rxjs/operators';

const EMPS_CACHE="employeesCache";


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Observable<Employee[]>;
  searchedEmployee: Observable<Employee>;
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
        catchError(this.handleError)
      );

      this.employees.subscribe(next => {
        localStorage[EMPS_CACHE]
      });

      this.employees = this.employees.pipe(
        startWith(localStorage[EMPS_CACHE] || [])
      )
      return this.employees;

    /*  let observable = this.httpclient.get('localhost:8082/employee/allemp');
     observable.subscribe(response => {
       console.log(response.toString)
 
     }); */
  }


  searchEmployee(empno: string): Observable<Employee> {

    this.searchedEmployee = this.httpclient.get<Employee>('http://localhost:8082/employee?empno='+empno)
     .pipe(
       catchError(this.handleError)
     );
     return this.searchedEmployee;
 }


  saveEmployee(newEmployee: Employee) :Observable<Employee> {
    return this.httpclient.post<Employee>('http://localhost:8082/employee',newEmployee , {
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
    .pipe(catchError(this.handleError));
  }

     

private handleError(errorResponse: HttpErrorResponse){
  if (errorResponse.error instanceof ErrorEvent)
    console.error('Client side error: ' , errorResponse.message);
    else
    console.error('Server side error: ', errorResponse);

    if  (errorResponse.error.message !=  undefined)
    return throwError(' ' +errorResponse.error.message);
    else
    return throwError('Unexpected error: ' + errorResponse.statusText);


  }

/*   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  } */


}
