import { Component } from '@angular/core';
class StyleClass {
  'color': string= 'blue';
  'font-size.px': number= 20;
  'font-weight': string= 'bold'; 
}
@Component({
  selector: 'app-ngstyledirectives',
  templateUrl: './ngstyledirectives.component.html',
  styleUrls: ['./ngstyledirectives.component.css']
})
export class NgstyledirectivesComponent {
	size: number= 0;

 
  styleClass: StyleClass = new StyleClass();

  mystyles = {
    background: 'green',
    width: '100px',
    height: '150px',
    color: 'red',
    border:''
  }


  addstylestest() {
    this.mystyles['color'] = 'white';
    this.mystyles ['border'] ='2px solid black'
    
  }

}
