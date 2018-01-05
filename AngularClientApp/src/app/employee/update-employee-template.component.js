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
var router_1 = require("@angular/router");
var UpdateEmployeeTepmlateComponent = /** @class */ (function () {
    function UpdateEmployeeTepmlateComponent(employeeService, activateRoute, router) {
        this.employeeService = employeeService;
        this.activateRoute = activateRoute;
        this.router = router;
        this.statusMessage = "Datat is loading...Please wait";
    }
    UpdateEmployeeTepmlateComponent.prototype.loadAndPopulateEmployeeData = function () {
        var _this = this;
        var employeeId = this.activateRoute.snapshot.params['employeeId'];
        this.employeeService.getEmployeeByCode(employeeId).subscribe(function (employeeData) {
            if (employeeData == null) {
                _this.statusMessage = "Employee with the specified employee code does not exists!";
            }
            else {
                _this.employee = employeeData;
            }
        }, function (error) {
            _this.statusMessage = "Problem with the service..Please try again after some time";
        });
    };
    UpdateEmployeeTepmlateComponent.prototype.ngOnInit = function () {
        this.loadAndPopulateEmployeeData();
    };
    UpdateEmployeeTepmlateComponent.prototype.resetCreateEmployeeForm = function () {
        this.loadAndPopulateEmployeeData();
    };
    UpdateEmployeeTepmlateComponent.prototype.updateEmployee = function (employeeForm) {
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
    UpdateEmployeeTepmlateComponent = __decorate([
        core_1.Injectable(),
        core_1.Component({
            templateUrl: 'app/employee/update-employee-template.component.html'
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService, router_1.ActivatedRoute, router_1.Router])
    ], UpdateEmployeeTepmlateComponent);
    return UpdateEmployeeTepmlateComponent;
}());
exports.UpdateEmployeeTepmlateComponent = UpdateEmployeeTepmlateComponent;
//# sourceMappingURL=update-employee-template.component.js.map