import { Injectable } from '@angular/core';

//import untuk firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
  employeeList: AngularFireList<any>;

  //selectedEmployee import dari employee.model
  selectedEmployee: Employee = new Employee();
  
  //bikin obj setelah import firedatabase
  constructor(private firebase: AngularFireDatabase) { }

  //template view
  getData() {
    //this.employeeList = this.firebase.list('name goes here');
    this.employeeList = this.firebase.list('employees');
    return this.employeeList;
  }
  //setelah jadi panggil di ngOnInit()
  //end of view

  //template add
  insertEmployee(employee: Employee) {
    this.employeeList.push(
    {
      name: employee.name,
      position: employee.position,
      office: employee.office,
      salary: employee.salary,
    });
  }
  //setelah jadi panggil di onSubmit()
  //end of add

  //template update
  updateEmployee(emp : Employee){
     this.employeeList.update(emp.$key,{
       name : emp.name,
       position : emp.position,
       office : emp.office,
       salary : emp.salary
     })
  }
  //end of update

  //template delete
  deleteEmployee(key : string){
    this.employeeList.remove(key);
  }
  //end of delete
}
