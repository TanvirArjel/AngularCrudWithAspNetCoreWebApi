import { Component,OnInit } from '@angular/core'
import { EmployeeService } from './employee.service'
import { Employee, IEmployee } from './employee'
import {ActivatedRoute,Router} from '@angular/router'
@Component({
    templateUrl: 'app/employee/delete-employee.component.html',
    providers : [EmployeeService]
})
export class DeleteEmployeeComponent implements OnInit {
    statusMessage: string = "Data is loading..Please wait";
    employee : Employee;
    constructor(private employeeService : EmployeeService, private activateRoute : ActivatedRoute, private router : Router) {
        
    }
    ngOnInit(): void {
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

    deleteEmployee(employeeId: number): void {
        //let employeeCode: string = this.activateRoute.snapshot.params['code'];
        this.employeeService.deleteEmployee(employeeId).subscribe((employeeData) => {
            if (employeeData == null) {
                this.statusMessage = "Employee with the specified employee code does not exists!";
            } else {
                this.router.navigate(['/employeeList']);
                alert("Employee is deleted successfully!");
            }
        }, (error) => {
            this.statusMessage = "Problem with the service..Please try again after some time";
        });
    }
    
}