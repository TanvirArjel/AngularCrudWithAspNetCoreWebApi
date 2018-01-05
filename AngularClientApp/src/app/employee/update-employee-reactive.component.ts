import { Component, OnInit } from '@angular/core'
import { NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { EmployeeService } from './employee.service'
import { IEmployee, Employee } from './employee'
import { ActivatedRoute, Router } from '@angular/router'
@Component({
    templateUrl: 'app/employee/update-employee-reactive.component.html',
    providers: [EmployeeService]
})
export class UpdateEmployeeReactiveComponent implements OnInit {
    statusMessage: string = "Data is loading...Please wait";
    employeeForm: FormGroup;
    employee: IEmployee;
    constructor(private employeeService: EmployeeService, private formBuilder: FormBuilder, private activateRoute: ActivatedRoute, private router: Router) {
        
    }

    loadAndPopulateEmployeeData(): void {
        let employeeId: number = this.activateRoute.snapshot.params['employeeId'];

        this.employeeService.getEmployeeByCode(employeeId).subscribe((employeeData) => {
            if (employeeData == null) {
                this.statusMessage = "Employee with the specified employee code does not exists!";
            } else {
                this.employee = employeeData;
                this.employeeForm = this.formBuilder.group({
                    employeeId: [this.employee.employeeId, [Validators.required]],
                    employeeName: [this.employee.employeeName, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
                    gender: [this.employee.gender],
                    annualSalary: [this.employee.annualSalary],
                    dateOfBirth: [this.employee.dateOfBirth, Validators.pattern('^(0[1-9]|1[0-9]|2[0-9]|3[01])[/](0[1-9]|1[012])[/][0-9]{4}$')]
                });
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