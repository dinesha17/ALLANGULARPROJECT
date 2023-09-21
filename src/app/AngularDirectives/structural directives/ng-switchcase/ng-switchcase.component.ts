import { Component } from '@angular/core';


class item {
  name!: string;
  val!: number;
}
@Component({
  selector: 'app-ng-switchcase',
  templateUrl: './ng-switchcase.component.html',
  styleUrls: ['./ng-switchcase.component.css']
})
export class NgSwitchcaseComponent {
  number:number=10;

  items: item[] = [{name: 'One', val: 1}, {name: 'Two', val: 2}, {name: 'Three', val: 3}, {name: 'Four', val: 3}, {name: 'Five', val: 3}];
    selectedValue1: string= 'One';
    selectedValue2: string= 'One';
    selectedValue3: string= 'One';
    selectedValue4: string= 'One';
}
