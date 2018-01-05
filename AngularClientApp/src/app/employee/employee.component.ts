import { Component, OnInit } from '@angular/core'
import { IEmployee } from './employee'
import {ActivatedRoute, Router} from  '@angular/router'
import { EmployeeService } from './employee.service'

@Component({
    //selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
})
export class EmployeeComponent implements OnInit  {
    employee: IEmployee;
    statusMessage : string = "Data is loading..Please wait";

    constructor(private employeeService: EmployeeService, private activateRoute : ActivatedRoute, private router : Router) {

    }

    ngOnInit(): void {
        let employeeId: number = this.activateRoute.snapshot.params['employeeId'];
        this.employeeService.getEmployeeByCode(employeeId).subscribe((employeeData) => {
                if (employeeData == null) {
                    this.statusMessage = "Employee with the specified employee code does not exists!";
                } else {
                    this.employee = employeeData;
                }
             },
            
            (error) => {
                this.statusMessage = "Problem with the service..Please try again after some time";
            });
    }

    onBackButtonClick(): void {
        this.router.navigate(['/employeeList']);
    }
    
}