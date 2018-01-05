"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(employeeService) {
        this.employeeService = employeeService;
        this.selectedEmployeeCountRadioButtonValue = 'All';
        this.statusMessage = "Loading Data.....Please wait";
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeService.getEmployees().subscribe(function (employeeData) { return _this.employees = employeeData; }, function (error) {
            console.log(error);
            _this.statusMessage = "Problem with the service.. Please try again after some time!";
        });
    };
    EmployeeListComponent.prototype.onEmployeeCountRadioButtonValueChange = function (selectedRadioButtonValue) {
        this.selectedEmployeeCountRadioButtonValue = selectedRadioButtonValue;
    };
    EmployeeListComponent.prototype.getTotalEmployeeCount = function () {
        return this.employees.length;
    };
    EmployeeListComponent.prototype.getMaleEmployeeCount = function () {
        return this.employees.filter(function (e) { return e.gender === "Male"; }).length;
    };
    EmployeeListComponent.prototype.getFemaleEmployeeCount = function () {
        return this.employees.filter(function (e) { return e.gender === "Female"; }).length;
    };
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
    EmployeeListComponent.prototype.trackByEmployeeCode = function (index, employee) {
        return employee.code;
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            //selector: 'list-employee',
            templateUrl: 'app/employee/employeeList.component.html',
            styleUrls: ['app/employee/employeeList.component.css'],
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeeList.component.js.map