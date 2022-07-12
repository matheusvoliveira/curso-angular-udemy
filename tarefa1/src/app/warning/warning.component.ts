import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
    selector: 'warning-alert',
    templateUrl: './warning.component.html', 
    styles: [
    `
        p {
            color: red;
            padding: 20px;
            border:1px solid red;
            display: inline-block;
        }
    `
    ]
})
export class WarningAlert{

}