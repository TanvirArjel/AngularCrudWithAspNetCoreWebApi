import { Component, OnInit } from '@angular/core'
import { IEmployee } from './employee'
import {EmployeeService} from './employee.service'

@Component({
    //selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css'],
})
export class EmployeeListComponent implements  OnInit {
    
    employees: IEmployee[];
    selectedEmployeeCountRadioButtonValue: string = 'All';
    statusMessage: string = "Loading Data.....Please wait";

    constructor(private employeeService : EmployeeService) {
        
    }

    ngOnInit(): void {
        this.employeeService.getEmployees().subscribe((employeeData) => this.employees = employeeData
            , (error) => {
                console.log(error);
                this.statusMessage = "Problem with the service.. Please try again after some time!"; 
            });
    }
     
    onEmployeeCountRadioButtonValueChange(selectedRadioButtonValue : string): void {
        this.selectedEmployeeCountRadioButtonValue = selectedRadioButtonValue;
    }

    getTotalEmployeeCount(): number {
        return this.employees.length;
    }

    getMaleEmployeeCount(): number {
        return this.employees.filter(e => e.gender === "Male").length;
    }

    getFemaleEmployeeCount(): number {
        return this.employees.filter(e => e.gender === "Female").length;
    }

    //getEmployees(): void {
    //    this.employees = [
    //        {
    //            code: 'emp101', name: 'Tom', gender: 'Male',
    //            annualSalary: 5500, dateOfBirth: '6/25/1988'
    //        },
    //        {
    //            code: 'emp102', name: 'Alex', gender: 'Male',
    //            annualSalary: 5700.95, dateOfBirth: '9/6/1982'
    //        },
    //        {
    //            code: 'emp103', name: 'Mike', gender: 'Male',
    //            annualSalary: 5900, dateOfBirth: '12/8/1979'
    //        },
    //        {
    //            code: 'emp104', name: 'Mary', gender: 'Female',
    //            annualSalary: 6500.826, dateOfBirth: '10/14/1980'
    //        },
    //        {
    //            code: 'emp105', name: 'Nancy', gender: 'Female',
    //            annualSalary: 6700.826, dateOfBirth: '12/15/1982'
    //        }
    //    ];
    //}

    trackByEmployeeCode(index: number, employee: any): string {
        return employee.code;
    }
    
}