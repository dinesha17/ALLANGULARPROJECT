import { Component } from '@angular/core';

@Component({
  selector: 'app-customerpipes',
  templateUrl: './customerpipes.component.html',
  styleUrls: ['./customerpipes.component.css']
})
export class CustomerpipesComponent {
  title: string = 'Angular Custom Pipe Example' ;
  celcius!: number;
  Fahrenheit!: number;   
}
