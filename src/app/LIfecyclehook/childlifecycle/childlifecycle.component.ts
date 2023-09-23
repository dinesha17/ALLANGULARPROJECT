import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthorModel } from '../moodel/auth.model';
import { AuthoraddressComponent } from '../authoraddress/authoraddress.component';


@Component({
  selector: 'app-childlifecycle',
  templateUrl: './childlifecycle.component.html',
  styleUrls: ['./childlifecycle.component.css']
})
export class ChildlifecycleComponent  implements OnInit ,OnChanges, DoCheck,AfterContentInit,AfterContentChecked{
 
  @ContentChild(AuthoraddressComponent)
  vauthaddress!: AuthoraddressComponent;
  @Input() data!:number
  @Input() data1!:boolean
  @Input()
  item!: AuthorModel;

  constructor(){
    console.log('hi hello constructor child')
  }


  ngOnChanges(changes: SimpleChanges): void {
  
  console.log(changes)
  }
  
  ngOnInit(): void {
    console.log('hi hello ngonint child')
    
  }
  ngDoCheck(): void {
    console.log(this.item)
  }
  ngAfterContentInit(): void {
    console.log('hi hello ngAfterContentInit child' + this.vauthaddress?.address)
  }
  ngAfterContentChecked(): void {
    console.log('hi hello ngAfterContentChecked child' + this.vauthaddress?.address)
  }

}
