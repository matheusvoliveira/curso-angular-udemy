import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
    selector: 'sucess-alert',
    templateUrl: './sucess.component.html', 
    styles: [
    `
        p {
            color: green;
            padding: 20px;
            border:1px solid green;
            display: inline-block;
        }
    `
    ]
})
export class SucessAlert{

}