import { Component } from '@angular/core';
import { Customer } from './childcomponet';

@Component({
  selector: 'app-childcomponet',
  templateUrl: './childcomponet.component.html',
  styleUrls: ['./childcomponet.component.css']
})
export class ChildcomponetComponent {

coustomer:Customer[]=[
  {customerNo: 1, name: 'Rahuld Dravid', address: '', city: 'Banglaore', state: 'Karnataka', country: 'India'},
  {customerNo: 2, name: 'Sachin Tendulkar', address: '', city: 'Mumbai', state: 'Maharastra', country: 'India'},
  {customerNo: 3, name: 'Saurrav Ganguly', address: '', city: 'Kolkata', state: 'West Bengal', country: 'India'},
  {customerNo: 4, name: 'Mahendra Singh Dhoni', address: '', city: 'Ranchi', state: 'Bihar', country: 'India'},
  {customerNo: 5, name: 'Virat Kohli', address: '', city: 'Delhi', state: 'Delhi', country: 'India'},
]

}
