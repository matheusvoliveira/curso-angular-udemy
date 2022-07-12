import { Component } from '@angular/core'

@Component({
    selector: 'updates-input',
    templateUrl: './updatesInput.component.html',
})
export class updatesInputComponent{
    updateInputName = ''
    
    onUpdateInput(event: Event){
        this.updateInputName = (<HTMLInputElement>event.target).value
    }
    onCheck(){
        if(this.updateInputName.length !== 0){
            this.updateInputName = ""
        }
    }
}