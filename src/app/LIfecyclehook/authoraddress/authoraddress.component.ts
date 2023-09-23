import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-authoraddress',
  templateUrl: './authoraddress.component.html',
  styleUrls: ['./authoraddress.component.css']
})
export class AuthoraddressComponent {

  @Input() address!:string;

}
