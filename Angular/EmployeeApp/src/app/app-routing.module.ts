import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeesComponent } from './employee/list-employees/list-employees.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EmployeeListResolverService } from './employee/list-employees/list-employees-resolver.service';
import { SearchEmployeeComponent } from './employee/search-employee/search-employee.component';

const routes: Routes = [
  { path: 'list', component: ListEmployeesComponent ,   resolve: {employeeList: EmployeeListResolverService}},
  { path: 'addNew', component: AddEmployeeComponent },
  { path: 'search', component: SearchEmployeeComponent},
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
export class AppRoutingModule { }
