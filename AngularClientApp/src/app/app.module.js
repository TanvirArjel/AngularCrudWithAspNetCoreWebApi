"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var employee_component_1 = require("./employee/employee.component");
var employeeList_component_1 = require("./employee/employeeList.component");
var create_employee_template_component_1 = require("./employee/create-employee-template.component");
var create_employee_reactive_component_1 = require("./employee/create-employee-reactive.component");
var update_employee_reactive_component_1 = require("./employee/update-employee-reactive.component");
var update_employee_template_component_1 = require("./employee/update-employee-template.component");
var delete_employee_component_1 = require("./employee/delete-employee.component");
var employeeTitle_pipe_1 = require("./employee/employeeTitle.pipe");
var employeeCount_component_1 = require("./employee/employeeCount.component");
var home_component_1 = require("./home/home.component");
var pageNotFound_component_1 = require("./others/pageNotFound.component");
var router_1 = require("@angular/router");
var employee_service_1 = require("./employee/employee.service");
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'employeeList', component: employeeList_component_1.EmployeeListComponent },
    { path: 'createEmployeeTemplate', component: create_employee_template_component_1.CreateEmployeeTepmlateComponent },
    { path: 'createEmployeeReactive', component: create_employee_reactive_component_1.CreateEmployeeReactiveComponent },
    { path: 'updateEmployeeReactive/:employeeId', component: update_employee_reactive_component_1.UpdateEmployeeReactiveComponent },
    { path: 'updateEmployeeTemplate/:employeeId', component: update_employee_template_component_1.UpdateEmployeeTepmlateComponent },
    { path: 'deleteEmployee/:employeeId', component: delete_employee_component_1.DeleteEmployeeComponent },
    { path: 'employeeDetails/:employeeId', component: employee_component_1.EmployeeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: pageNotFound_component_1.PageNotFoundComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes)],
            declarations: [app_component_1.AppComponent, employee_component_1.EmployeeComponent, employeeList_component_1.EmployeeListComponent, create_employee_template_component_1.CreateEmployeeTepmlateComponent, create_employee_reactive_component_1.CreateEmployeeReactiveComponent,
                update_employee_reactive_component_1.UpdateEmployeeReactiveComponent, update_employee_template_component_1.UpdateEmployeeTepmlateComponent, delete_employee_component_1.DeleteEmployeeComponent, employeeTitle_pipe_1.EmployeeTitlePipe, employeeCount_component_1.EmployeeCountComponent, home_component_1.HomeComponent, pageNotFound_component_1.PageNotFoundComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [employee_service_1.EmployeeService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map