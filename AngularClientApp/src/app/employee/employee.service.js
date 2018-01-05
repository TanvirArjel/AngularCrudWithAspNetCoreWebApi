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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/Observable/throw");
var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
    }
    EmployeeService.prototype.getEmployees = function () {
        return this.http.get("http://localhost:47545/api/Employee/GetEmployees").map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EmployeeService.prototype.getEmployeeByCode = function (employeeId) {
        return this.http.get("http://localhost:47545/api/Employee/GetEmployee/" + employeeId).map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EmployeeService.prototype.createEmployee = function (employee) {
        var body = JSON.stringify(employee);
        var headerOptions = new http_1.Headers({ 'Content-Type': 'application/json' });
        var requestOptions = new http_1.RequestOptions({ method: http_1.RequestMethod.Post, headers: headerOptions });
        return this.http.post("http://localhost:47545/api/Employee/PostEmployee", body, requestOptions)
            .map(function (response) { return response.json(); });
    };
    EmployeeService.prototype.updateEmployee = function (employee) {
        var body = JSON.stringify(employee);
        var headerOptions = new http_1.Headers({ 'Content-Type': 'application/json' });
        var requestOptions = new http_1.RequestOptions({ method: http_1.RequestMethod.Put, headers: headerOptions });
        return this.http.put("http://localhost:47545/api/Employee/PutEmployee/" + employee.employeeId, body, requestOptions)
            .map(function (response) { return response.json(); });
    };
    EmployeeService.prototype.deleteEmployee = function (employeeId) {
        var requestOptions = new http_1.RequestOptions({ method: http_1.RequestMethod.Delete });
        return this.http.delete("http://localhost:47545/api/Employee/DeleteEmployee/" + employeeId, requestOptions)
            .map(function (response) { return response.json(); });
    };
    EmployeeService.prototype.handleError = function (error) {
        console.error();
        return Observable_1.Observable.throw(error);
    };
    EmployeeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map