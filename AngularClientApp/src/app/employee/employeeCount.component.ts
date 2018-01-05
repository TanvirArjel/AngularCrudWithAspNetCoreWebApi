import {Component, Input, Output, EventEmitter} from  '@angular/core'
@Component({
    selector : 'employee-count',
    templateUrl : 'app/employee/employeeCount.Component.html'
})
export class EmployeeCountComponent {
    selectedRadioButtonValue: string = 'All';

    @Output()
    countRadioButtonValueChanged : EventEmitter<string> = new EventEmitter <string>();

    @Input()
    all: number;

    @Input()
    male: number;

    @Input()
    female: number;

    onRadioButtonValueChanged() {
        this.countRadioButtonValueChanged.emit(this.selectedRadioButtonValue);
        console.log(this.selectedRadioButtonValue);
    }
}