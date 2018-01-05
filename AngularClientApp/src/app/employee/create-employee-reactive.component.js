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
var CreateEmployeeReactiveComponent = /** @class */ (function () {
    function CreateEmployeeReactiveComponent(employeeService, formBuilder) {
        this.employeeService = employeeService;
        this.formBuilder = formBuilder;
        this.statusMessage = "";
    }
    CreateEmployeeReactiveComponent.prototype.ngOnInit = function () {
        this.employeeForm = this.formBuilder.group({
            employeeName: [null, [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(50)]],
            gender: [],
            annualSalary: [],
            dateOfBirth: [null, forms_1.Validators.pattern('^(0[1-9]|1[0-9]|2[0-9]|3[01])[/](0[1-9]|1[012])[/][0-9]{4}$')]
        });
    };
    //employeeForm = new FormGroup({
    //    code: new FormControl(null,[Validators.required]),
    //    employeeName: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
    //    gender: new FormControl(),
    //    annualSalary: new FormControl(),
    //    dateOfBirth: new FormControl(null, Validators.pattern('^(0[1-9]|1[0-9]|2[0-9]|3[01])[/](0[1-9]|1[012])[/][0-9]{4}$'))
    //});
    CreateEmployeeReactiveComponent.prototype.resetCreateEmployeeForm = function (form) {
        form.reset();
    };
    CreateEmployeeReactiveComponent.prototype.createEmployee = function (employeeForm) {
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
    CreateEmployeeReactiveComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/employee/create-employee-reactive.component.html',
            providers: [employee_service_1.EmployeeService]
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService, forms_1.FormBuilder])
    ], CreateEmployeeReactiveComponent);
    return CreateEmployeeReactiveComponent;
}());
exports.CreateEmployeeReactiveComponent = CreateEmployeeReactiveComponent;
//# sourceMappingURL=create-employee-reactive.component.js.map