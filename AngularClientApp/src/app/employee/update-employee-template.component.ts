import { Component, OnInit, Injectable } from '@angular/core'
import { NgForm } from '@angular/forms'
import { EmployeeService } from './employee.service'
import { IEmployee, Employee } from './employee'
import {ActivatedRoute, Router} from '@angular/router'

@Injectable()
@Component({
    templateUrl: 'app/employee/update-employee-template.component.html'
})
export class UpdateEmployeeTepmlateComponent implements OnInit {

    employee: Employee;
    statusMessage: string = "Datat is loading...Please wait";
    constructor(private employeeService: EmployeeService, private  activateRoute : ActivatedRoute, private  router : Router) {

    }

    loadAndPopulateEmployeeData(): void {
        let employeeId: number = this.activateRoute.snapshot.params['employeeId'];
        this.employeeService.getEmployeeByCode(employeeId).subscribe((employeeData) => {
            if (employeeData == null) {
                this.statusMessage = "Employee with the specified employee code does not exists!";
            } else {
                this.employee = employeeData;
            }
        }, (error) => {
            this.statusMessage = "Problem with the service..Please try again after some time";
        });
    }

    ngOnInit(): void {
        this.loadAndPopulateEmployeeData();
    }

    resetCreateEmployeeForm() {
        this.loadAndPopulateEmployeeData();
    }

    updateEmployee(employeeForm: NgForm): void {
        this.employeeService.updateEmployee(employeeForm.value).subscribe((employeeData) => {
            if (employeeData == null) {
                alert("There is some problem");
            } else {
                this.router.navigate(['/employeeList']);
                alert("Employee is updated successfully");
            }
        }, (error) => {
            this.statusMessage = "Problem with the service..Please try again after some time";
            console.log(this.statusMessage);
        });
    }
}