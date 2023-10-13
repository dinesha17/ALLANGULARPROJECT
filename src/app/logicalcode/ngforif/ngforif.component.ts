import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-ngforif',
  templateUrl: './ngforif.component.html',
  styleUrls: ['./ngforif.component.css']
})
export class NgforifComponent {

  isVisible:boolean=true

  fiends=[
    {
    name:'dinesh',
    age:23
  },
  {
    name:'dineshanbu',
    age:45
  },
  {
    name:'dineshkad',
    age:50
  },
  {
    name:'kaddinesh',
    age:24
  },
  {
    name:'dddinesh',
    age:34
  }];

  hideList(){
    this.isVisible = false;
}

constructor(private route: ActivatedRoute) {
  // Access the ActivatedRouteSnapshot in the constructor
  const snapshot: ActivatedRouteSnapshot = route.snapshot;

  // Access route parameters
  const id = snapshot.paramMap.get('id');
  const name = snapshot.paramMap.get('name');

  console.log(`Route parameters: id = ${id}, name = ${name}`);

  // Access query parameters
  const queryParam1 = snapshot.queryParamMap.get('queryParam1');
  const queryParam2 = snapshot.queryParamMap.get('queryParam2');

  console.log(`Query parameters: queryParam1 = ${queryParam1}, queryParam2 = ${queryParam2}`);
}


}
