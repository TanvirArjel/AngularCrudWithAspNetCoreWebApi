import { Component, OnInit } from '@angular/core'
import { IEmployee } from './employee'
import { EmployeeService } from './employee.service'
declare var $: any;

@Component({
    //selector: 'list-employee',
    templateUrl: 'app/employee/employeeDataTable.component.html'
})
export class EmployeeDataTableComponent implements OnInit {

    employees: IEmployee[];
    statusMessage: string = "Loading Data.....Please wait";

    constructor(private employeeService: EmployeeService) {

    }

    ngOnInit(): void {


        this.employeeService.getEmployees().subscribe((employeeData) => {

            this.employees = employeeData,
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
                },10);

        }, (error) => {
            console.log(error);
            this.statusMessage = "Problem with the service.. Please try again after some time!";
        });
    }




    trackByEmployeeCode(index: number, employee: any): string {
        return employee.code;
    }

}