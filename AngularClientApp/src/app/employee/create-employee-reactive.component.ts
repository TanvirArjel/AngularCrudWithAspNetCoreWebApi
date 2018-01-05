import { Component, OnInit } from '@angular/core'
import { NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { EmployeeService } from './employee.service'
import { IEmployee, Employee } from './employee'
@Component({
    templateUrl: 'app/employee/create-employee-reactive.component.html',
    providers: [EmployeeService]
})
export class CreateEmployeeReactiveComponent implements OnInit {
    statusMessage: string = "";
    employeeForm: FormGroup;
    constructor(private employeeService: EmployeeService, private formBuilder: FormBuilder) {

    }

    ngOnInit(): void {
        this.employeeForm = this.formBuilder.group({
            employeeName: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
            gender: [],
            annualSalary: [],
            dateOfBirth: [null, Validators.pattern('^(0[1-9]|1[0-9]|2[0-9]|3[01])[/](0[1-9]|1[012])[/][0-9]{4}$')]
        });
    }

    //employeeForm = new FormGroup({
    //    code: new FormControl(null,[Validators.required]),
    //    employeeName: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
    //    gender: new FormControl(),
    //    annualSalary: new FormControl(),
    //    dateOfBirth: new FormControl(null, Validators.pattern('^(0[1-9]|1[0-9]|2[0-9]|3[01])[/](0[1-9]|1[012])[/][0-9]{4}$'))
    //});

    resetCreateEmployeeForm(form: NgForm) {
        form.reset();
    }

    createEmployee(employeeForm: NgForm): void {
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