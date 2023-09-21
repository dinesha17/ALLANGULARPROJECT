import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclassdirectives',
  templateUrl: './ngclassdirectives.component.html',
  styleUrls: ['./ngclassdirectives.component.css']
})
export class NgclassdirectivesComponent {


  cssVar: string = 'primary big';
  cssArray = ['primary', 'big'];
  cssClass = {
    primary: true,
    big: true,
  };
}
