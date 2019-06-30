import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employee/list-employees/list-employees.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EmployeeListResolverService } from './employee/list-employees/list-employees-resolver.service';
import { SearchEmployeeComponent } from './employee/search-employee/search-employee.component';
import { LoginAuthComponent } from './security/login/login-auth/login-auth.component';


@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    AddEmployeeComponent,
    SearchEmployeeComponent,
    LoginAuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    EmployeeListResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
