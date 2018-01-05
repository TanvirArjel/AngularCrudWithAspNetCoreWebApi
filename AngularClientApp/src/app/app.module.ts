import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import {HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employeeList.component';
import { EmployeeDataTableComponent } from './employee/employeeDataTable.component';
import { CreateEmployeeTepmlateComponent } from './employee/create-employee-template.component'
import { CreateEmployeeReactiveComponent } from './employee/create-employee-reactive.component'
import { UpdateEmployeeReactiveComponent } from './employee/update-employee-reactive.component'
import { UpdateEmployeeTepmlateComponent } from './employee/update-employee-template.component'
import {DeleteEmployeeComponent} from './employee/delete-employee.component'
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe';
import { EmployeeCountComponent } from './employee/employeeCount.component'
import { HomeComponent } from './home/home.component'
import { PageNotFoundComponent } from './others/pageNotFound.component'
import { RouterModule, Routes } from '@angular/router'
import { EmployeeService} from './employee/employee.service'


const appRoutes: Routes = [
    {path : 'home',component : HomeComponent},
    { path: 'employeeList', component: EmployeeListComponent },
    { path: 'employeeDataTable', component: EmployeeDataTableComponent },
    { path: 'createEmployeeTemplate', component: CreateEmployeeTepmlateComponent },
    { path: 'createEmployeeReactive', component: CreateEmployeeReactiveComponent },
    { path: 'updateEmployeeReactive/:employeeId', component: UpdateEmployeeReactiveComponent },
    { path: 'updateEmployeeTemplate/:employeeId', component: UpdateEmployeeTepmlateComponent },
    { path: 'deleteEmployee/:employeeId', component: DeleteEmployeeComponent },
    { path: 'employeeDetails/:employeeId', component: EmployeeComponent },
    {path : '',redirectTo : '/home', pathMatch : 'full'},
    {path : '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, RouterModule.forRoot(appRoutes) ],
    declarations: [AppComponent, EmployeeComponent, EmployeeListComponent, EmployeeDataTableComponent, CreateEmployeeTepmlateComponent, CreateEmployeeReactiveComponent,
        UpdateEmployeeReactiveComponent,UpdateEmployeeTepmlateComponent,DeleteEmployeeComponent,EmployeeTitlePipe, EmployeeCountComponent, HomeComponent, PageNotFoundComponent],
    bootstrap: [AppComponent],
    providers: [EmployeeService]
})
export class AppModule { }
