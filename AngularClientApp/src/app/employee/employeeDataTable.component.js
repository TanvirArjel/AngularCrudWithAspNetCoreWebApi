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
var EmployeeDataTableComponent = /** @class */ (function () {
    function EmployeeDataTableComponent(employeeService) {
        this.employeeService = employeeService;
        this.statusMessage = "Loading Data.....Please wait";
    }
    EmployeeDataTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeService.getEmployees().subscribe(function (employeeData) {
            _this.employees = employeeData,
                setTimeout(function () {
                    $(function () {
                        // Setup - add a text input to each header cell
                        $('#dataTable thead tr:eq(0) th:not(:last,:first)').each(function () {
                            var title = $(this).text();
                            $(this).html('<input type="text" placeholder="Search ' + title + '" />');
                        });
                        var table = $('#dataTable').DataTable({
                            "scrollX": true,
                            "fixedColumns": {
                                rightColumns: 1
                            }
                        });
                        // Individual Column Searching In case of Some Fixed Column
                        $(table.table().container()).on('keyup', 'thead input', function () {
                            table.column($(this).parent().index() + ':visible')
                                .search(this.value)
                                .draw();
                        });
                    });
                }, 10);
        }, function (error) {
            console.log(error);
            _this.statusMessage = "Problem with the service.. Please try again after some time!";
        });
    };
    EmployeeDataTableComponent.prototype.trackByEmployeeCode = function (index, employee) {
        return employee.code;
    };
    EmployeeDataTableComponent = __decorate([
        core_1.Component({
            //selector: 'list-employee',
            templateUrl: 'app/employee/employeeDataTable.component.html'
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService])
    ], EmployeeDataTableComponent);
    return EmployeeDataTableComponent;
}());
exports.EmployeeDataTableComponent = EmployeeDataTableComponent;
//# sourceMappingURL=employeeDataTable.component.js.map