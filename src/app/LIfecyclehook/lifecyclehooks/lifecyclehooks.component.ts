import { Component, OnInit } from '@angular/core';
import { AuthorModel } from '../moodel/auth.model';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent implements OnInit{

count:number=0
test:boolean=false;
public obj:AuthorModel={id:34,name:'dgddgdgd'}
address:string='india'

  constructor(){
    console.log('hi hello parent constructor')
  }
  ngOnInit(): void {
    console.log('hi hello parent ngonint')
  }
  counter(){
    this.count++,
    this.test =!this.test,
    this.obj.id =this.count++
    this.address=this.address + this.count

  }


}
