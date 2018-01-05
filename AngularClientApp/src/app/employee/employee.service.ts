import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Http, Response,Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/Observable/throw'


@Injectable()
export class EmployeeService {
    constructor(private http: Http) {}

    getEmployees(): Observable<IEmployee[]> {
        return this.http.get("http://localhost:47545/api/Employee/GetEmployees").map((response: Response) => <IEmployee[]>response.json())
            .catch(this.handleError);
    }

    getEmployeeByCode(employeeId: number): Observable<IEmployee> {
        return this.http.get("http://localhost:47545/api/Employee/GetEmployee/" + employeeId).map((response: Response) => <IEmployee>response.json())
            .catch(this.handleError);

    }

    createEmployee(employee: IEmployee): Observable<IEmployee> {
        let body = JSON.stringify(employee);
        let headerOptions = new Headers({ 'Content-Type': 'application/json' });
        let requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
        return this.http.post("http://localhost:47545/api/Employee/PostEmployee", body, requestOptions)
            .map((response: Response) => response.json());
    }

    updateEmployee(employee: IEmployee): Observable<IEmployee> {
        let body = JSON.stringify(employee);
        let headerOptions = new Headers({ 'Content-Type': 'application/json' });
        let requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
        return this.http.put("http://localhost:47545/api/Employee/PutEmployee/" + employee.employeeId, body, requestOptions)
            .map((response: Response) => <IEmployee>response.json());
    }

    deleteEmployee(employeeId: number): Observable<IEmployee> {
        let requestOptions = new RequestOptions({ method: RequestMethod.Delete });
        return this.http.delete("http://localhost:47545/api/Employee/DeleteEmployee/" + employeeId, requestOptions)
            .map((response: Response) => <IEmployee>response.json());
    }

    handleError(error: Response) {
        console.error();
        return Observable.throw(error);
    }
}