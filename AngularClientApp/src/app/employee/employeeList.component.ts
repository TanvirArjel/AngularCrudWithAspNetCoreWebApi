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

  

    trackByEmployeeCode(index: number, employee: any): string {
        return employee.code;
    }
    
}