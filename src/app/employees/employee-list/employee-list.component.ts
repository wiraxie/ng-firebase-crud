import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../shared/employee.service';

//dari class model
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-employee-list', //dipakai di employees.component.html
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  //providers : [EmployeeService],
})
export class EmployeeListComponent implements OnInit {
  
  //variable import from employee shared model
  employeelist: Employee[];

  //constructor after import provide service
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() 
  {
    //template
    //getData dipanggil untuk view list
    var x = this.employeeService.getData();
    x.snapshotChanges().subscribe(item => 
    {
      this.employeelist = [];
      item.forEach(element => 
      {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.employeelist.push(y as Employee);
      });
    });
  }

  onItemClick(emp : Employee){
    this.employeeService.selectedEmployee = Object.assign({},emp);
  }

}
