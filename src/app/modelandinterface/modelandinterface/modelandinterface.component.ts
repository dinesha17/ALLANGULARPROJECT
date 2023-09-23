import { Component } from '@angular/core';
import { User } from './user';
import { UserTest } from './usertest.model';

@Component({
  selector: 'app-modelandinterface',
  templateUrl: './modelandinterface.component.html',
  styleUrls: ['./modelandinterface.component.css']
})
export class ModelandinterfaceComponent {

user!:User

constructor(){

  this.user = new UserTest(1,'dinesh','dineshanbu17@gmail')
}
}
