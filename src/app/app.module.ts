import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { FormsModule} from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { ModalModule } from 'ngx-bootstrap';

//import ang. firebase module
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { EmployeeService } from './employees/shared/employee.service';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';

//import dari invirontment
import { environment } from '../environments/environment'


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), //environtment. yg di environtment 
    AngularFireDatabaseModule,  //here
    FormsModule,
    CustomFormsModule,
    ModalModule.forRoot(),
  ],
  providers: [ EmployeeService ],
  bootstrap: [ AppComponent, EmployeesComponent, EmployeeComponent, EmployeeListComponent, ]
})
export class AppModule { }
