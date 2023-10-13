import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AuthorModel } from '../moodel/auth.model';
import { ChildlifecycleComponent } from '../childlifecycle/childlifecycle.component';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent implements OnInit,AfterViewInit,AfterViewChecked,OnDestroy{

  @ViewChild('btncounter') btncounter!:ElementRef
  @ViewChild(ChildlifecycleComponent) childcomponet!:ChildlifecycleComponent

count:number=0
test:boolean=false;
public obj:AuthorModel={id:34,name:'dgddgdgd'}
address:string='india'
time:any;

  constructor(){
    
    console.log('hi hello parent constructor')
  }
  ngOnInit(): void {
    console.log('hi hello parent ngonint');
    console.log(this.btncounter,'viewchild')
    // this.btncounter.nativeElement.innerHTML  ='buttton text updated'
    // this.timer()
  }
  counter(){
    this.count++,
    this.test =!this.test,
    this.obj.id =this.count++
    this.address=this.address + this.count

  }
  ngAfterViewInit(): void {
    console.log(this.btncounter,'viewinit')
   
  }
  ngAfterViewChecked(): void {
    console.log(this.childcomponet.childcounter ,'viechecked')
  }
ngOnDestroy(): void {
  console.log('parent componet destory')
  clearInterval(this.time)
}
timer():void{
  this.time=setInterval(()=>{
  this.count++;
  console.log('counter')
  },1000)
}
}
