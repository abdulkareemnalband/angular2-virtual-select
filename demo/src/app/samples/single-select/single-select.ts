import { Component } from '@angular/core';

@Component({
    selector: 'single-select-sample',
    templateUrl:'single-select.html'
})
export class SingleSelectComponent {
    options:string[] = ['Leonardo Da Vinci','Galileo','Sir Isaac Newton','Thomas Savery','Benjamin Franklin','Steve Jobs','Alan Turing','Nikola Tesla'];
    selectedItems =[];
    htmlCode:string = `
  &lt;sh-select [options]=&quot;options&quot;
                [placeholder]=&quot;'Select item'&quot;
                [(ngModel)]=&quot;selectedItems&quot;&gt;&lt;/sh-select&gt;
                
`

    typescriptCode:string =`
    @Component({
        selector: 'single-select-sample',
        templateUrl\:'single-select.html'
    })
    export class SingleSelectComponent {
        stringOptions:string[] = ['Leonardo Da Vinci','Galileo','Sir Isaac Newton','Thomas Savery','Benjamin Franklin','Steve Jobs','Alan Turing','Nikola Tesla'];
        selectedStrings =[];
    }
`
    constructor(){
    }

}
