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

  getData() {
    //this.employeeList = this.firebase.list('name goes here');
    this.employeeList = this.firebase.list('employees');
    return this.employeeList;
  }
  //setelah jadi panggil di ngOnInit()

  insertEmployee(empoloyee: Employee) {
    this.employeeList.push(
    {
      name: empoloyee.name,
      position: empoloyee.position,
      office: empoloyee.office,
      salary: empoloyee.salary
    });
  }
  //setelah jadi panggil di onSubmit()

  updateEmployee(emp : Employee){
     this.employeeList.update(emp.$key,{
       name : emp.name,
       position : emp.position,
       office : emp.office,
       salary : emp.salary
     })
  }

  deleteEmployee(key : string){
    this.employeeList.remove(key);
  }
}
