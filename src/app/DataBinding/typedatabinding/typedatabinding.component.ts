import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-typedatabinding',
  templateUrl: './typedatabinding.component.html',
  styleUrls: ['./typedatabinding.component.css']
})
export class TypedatabindingComponent implements OnInit {

  firstname:string='DINESH '
  lastname:string="A"


  //Pro
  TitleName='Welcome New Angulr';
  TextName=true

  images='https://angular.io/assets/images/logos/angular/[email protected]'
  color='red'

  ngOnInit(): void {

  }
  save(){

  }

  countclick=0
  getclick(){

    this.countclick++
  }

  getinput(event:any){
    console.log( (event.target as HTMLInputElement).value)

  }

  value1='';
  value2='';
  value3='';
  value4=''

  inputchange='I eat mlik'
  inputchangevalue(event:any){
    console.log(event)
    const params = new HttpParams().set('name_like', event);
  
    console.log(params)
  }

name1Changed(arg:any) {
 console.log("name1Changed " + arg.target.value);
 console.log(arg);
}
 
country1Changed(arg:any) {
  console.log("country1Changed " + arg.target.value);
  console.log(arg);
}

countries=[{
  id:1,name:'dinesh'
}]
}
