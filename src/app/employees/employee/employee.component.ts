import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employee', //dipakai di employees.component.html
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  //providers : [EmployeeService],
})

export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.resetForm();
  }

  //untuk fungsi2 button di form

  onSubmit(form: NgForm) 
  {
    //fungsi insertEmployee dan update
    if (form.value.$key == null) //jika primary key tidak ada, bikin baru
    {
      this.employeeService.insertEmployee(form.value);
    }
    else //jika primary key ada update existing
    {
      this.employeeService.updateEmployee(form.value);
    }
    this.resetForm(form);

    console.log('ini', NgForm);
  }

  resetForm(form?: NgForm) {
    //fungsi reset
    if (form != null)
      form.reset();
    this.employeeService.selectedEmployee = {
      $key: null,
      name: '',
      position: '',
      email: '',
      office: '',
      salary: 0,
    }
  }

  onDelete(form: NgForm) {
    //fungsi deleteEmployee()
    if (confirm('Are you sure to delete this record ?') == true) {
      this.employeeService.deleteEmployee(form.value.$key);
      this.resetForm(form);
    }
  }
}
