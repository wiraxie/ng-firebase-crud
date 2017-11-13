import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { EmpListComponent } from './employee/emp-list/emp-list.component';
import { EmployeesComponent } from './Employee/employees/employees.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmpListComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
