import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accentureimport',
  templateUrl: './accentureimport.component.html',
  styleUrls: ['./accentureimport.component.css']
})
export class AccentureimportComponent implements OnInit {

ngOnInit(){
  console.log(1);
  setTimeout(function(){
    console.log(2)
  },1000);
  setTimeout(function(){
    console.log(3)
  },0)
  console.log(4)
  
  function x(){
    setTimeout(function(){
      console.log(i)
    },1000);
    const i =100;

  }
  x();


}



}
