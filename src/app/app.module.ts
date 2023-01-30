import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DepartmentsComponent } from './departments/departments.component';
import { TeamsComponent } from './teams/teams.component';
import { EmployeesComponent } from './employees/employees.component';
import { AddDepartmentComponent } from './departments/add-department/add-department.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DepartmentsListComponent } from './departments/departments-list/departments-list.component';
import { DepartmentDetailsComponent } from './departments/department-details/department-details.component';
import { EditDepartmentComponent } from './departments/edit-department/edit-department.component';
import { DeleteDepartmentComponent } from './departments/delete-department/delete-department.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './shared/modal/modal.component';
import { AddTeamComponent } from './teams/add-team/add-team.component';
import { DeleteTeamComponent } from './teams/delete-team/delete-team.component';
import { TeamDetailsComponent } from './teams/team-details/team-details.component';
import { TeamsListComponent } from './teams/teams-list/teams-list.component';
import { EditTeamComponent } from './teams/edit-team/edit-team.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './employees/delete-employee/delete-employee.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DepartmentsComponent,
    TeamsComponent,
    EmployeesComponent,
    AddDepartmentComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    DepartmentsListComponent,
    DepartmentDetailsComponent,
    EditDepartmentComponent,
    DeleteDepartmentComponent,
    ModalComponent,
    AddTeamComponent,
    DeleteTeamComponent,
    TeamDetailsComponent,
    TeamsListComponent,
    EditTeamComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    DeleteEmployeeComponent,
    EmployeesListComponent,
    EmployeeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
