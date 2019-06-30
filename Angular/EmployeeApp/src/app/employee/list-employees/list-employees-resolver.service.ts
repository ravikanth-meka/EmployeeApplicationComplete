import {Resolve,  ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Employee } from '../../models/employee.model';
import { Injectable } from '@angular/core';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { catchError } from 'rxjs/operators';
import { Observable,of } from 'rxjs';

@Injectable()
export class EmployeeListResolverService implements Resolve<Employee[] | string>{

    constructor(private employeeService : EmployeeService){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable< Employee[] | string > {
        return this.employeeService.getAllEmployees()
        .pipe(
            catchError((err: string) => of(err))
            );
    }

}
