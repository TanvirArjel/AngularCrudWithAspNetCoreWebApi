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
var forms_1 = require("@angular/forms");
var employee_service_1 = require("./employee.service");
var router_1 = require("@angular/router");
var UpdateEmployeeReactiveComponent = /** @class */ (function () {
    function UpdateEmployeeReactiveComponent(employeeService, formBuilder, activateRoute, router) {
        this.employeeService = employeeService;
        this.formBuilder = formBuilder;
        this.activateRoute = activateRoute;
        this.router = router;
        this.statusMessage = "Data is loading...Please wait";
    }
    UpdateEmployeeReactiveComponent.prototype.loadAndPopulateEmployeeData = function () {
        var _this = this;
        var employeeId = this.activateRoute.snapshot.params['employeeId'];
        this.employeeService.getEmployeeByCode(employeeId).subscribe(function (employeeData) {
            if (employeeData == null) {
                _this.statusMessage = "Employee with the specified employee code does not exists!";
            }
            else {
                _this.employee = employeeData;
                _this.employeeForm = _this.formBuilder.group({
                    employeeId: [_this.employee.employeeId, [forms_1.Validators.required]],
                    employeeName: [_this.employee.employeeName, [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(50)]],
                    gender: [_this.employee.gender],
                    annualSalary: [_this.employee.annualSalary],
                    dateOfBirth: [_this.employee.dateOfBirth, forms_1.Validators.pattern('^(0[1-9]|1[0-9]|2[0-9]|3[01])[/](0[1-9]|1[012])[/][0-9]{4}$')]
                });
            }
        }, function (error) {
            _this.statusMessage = "Problem with the service..Please try again after some time";
        });
    };
    UpdateEmployeeReactiveComponent.prototype.ngOnInit = function () {
        this.loadAndPopulateEmployeeData();
    };
    UpdateEmployeeReactiveComponent.prototype.resetCreateEmployeeForm = function () {
        this.loadAndPopulateEmployeeData();
    };
    UpdateEmployeeReactiveComponent.prototype.updateEmployee = function (employeeForm) {
        var _this = this;
        this.employeeService.updateEmployee(employeeForm.value).subscribe(function (employeeData) {
            if (employeeData == null) {
                alert("There is some problem");
            }
            else {
                _this.router.navigate(['/employeeList']);
                alert("Employee is updated successfully");
            }
        }, function (error) {
            _this.statusMessage = "Problem with the service..Please try again after some time";
            console.log(_this.statusMessage);
        });
    };
    UpdateEmployeeReactiveComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/employee/update-employee-reactive.component.html',
            providers: [employee_service_1.EmployeeService]
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService, forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router])
    ], UpdateEmployeeReactiveComponent);
    return UpdateEmployeeReactiveComponent;
}());
exports.UpdateEmployeeReactiveComponent = UpdateEmployeeReactiveComponent;
//# sourceMappingURL=update-employee-reactive.component.js.map