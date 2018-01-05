import {Component, OnInit, Injectable} from  '@angular/core'
import { NgForm } from '@angular/forms'
import { EmployeeService } from './employee.service'
import { IEmployee, Employee } from './employee'

@Injectable()
@Component({
    templateUrl: 'app/employee/create-employee-template.component.html'
})
export class CreateEmployeeTepmlateComponent implements OnInit {

    employee : Employee;
    statusMessage : string = "";
    constructor(private employeeService: EmployeeService) {

    }

    ngOnInit(): void {
        this.employee = new Employee();
        this.employee.gender = null;
    }

    resetCreateEmployeeForm(employeeForm: NgForm) {
        employeeForm.reset();
    }

    createEmployee(employeeForm: NgForm) : void {
        this.employeeService.createEmployee(employeeForm.value).subscribe((employeeData) => {
            if (employeeData == null) {
                alert("There is some problem");
            } else {
                this.resetCreateEmployeeForm(employeeForm);
                alert("Employee is created successfully");
            }
        }, (error) => {
            this.statusMessage = "Problem with the service..Please try again after some time";
            console.log(this.statusMessage);
        });
    }
}