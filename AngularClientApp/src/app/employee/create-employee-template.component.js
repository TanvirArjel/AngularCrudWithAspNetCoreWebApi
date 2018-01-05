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
var employee_1 = require("./employee");
var CreateEmployeeTepmlateComponent = /** @class */ (function () {
    function CreateEmployeeTepmlateComponent(employeeService) {
        this.employeeService = employeeService;
        this.statusMessage = "";
    }
    CreateEmployeeTepmlateComponent.prototype.ngOnInit = function () {
        this.employee = new employee_1.Employee();
        this.employee.gender = null;
    };
    CreateEmployeeTepmlateComponent.prototype.resetCreateEmployeeForm = function (employeeForm) {
        employeeForm.reset();
    };
    CreateEmployeeTepmlateComponent.prototype.createEmployee = function (employeeForm) {
        var _this = this;
        this.employeeService.createEmployee(employeeForm.value).subscribe(function (employeeData) {
            if (employeeData == null) {
                alert("There is some problem");
            }
            else {
                _this.resetCreateEmployeeForm(employeeForm);
                alert("Employee is created successfully");
            }
        }, function (error) {
            _this.statusMessage = "Problem with the service..Please try again after some time";
            console.log(_this.statusMessage);
        });
    };
    CreateEmployeeTepmlateComponent = __decorate([
        core_1.Injectable(),
        core_1.Component({
            templateUrl: 'app/employee/create-employee-template.component.html'
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService])
    ], CreateEmployeeTepmlateComponent);
    return CreateEmployeeTepmlateComponent;
}());
exports.CreateEmployeeTepmlateComponent = CreateEmployeeTepmlateComponent;
//# sourceMappingURL=create-employee-template.component.js.map