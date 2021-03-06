import { Component, OnInit } from '@angular/core';

import { EmployeeService } from './shared/employee.service'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  
  //provide Dependency Injection di module atau component
  //providers :[EmployeeService], 
})
export class EmployeesComponent implements OnInit {

  //contructor after provide import service
  constructor(private employeeService : EmployeeService) { }

  ngOnInit() 
  {

  }

}
