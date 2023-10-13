import { Component } from '@angular/core';

@Component({
  selector: 'app-blod-pressure',
  templateUrl: './blod-pressure.component.html',
  styleUrls: ['./blod-pressure.component.css']
})
export class BlodPressureComponent {
data =[
  {
    "Name":'dinesh',
     "Bp":[
      {
        "value": "120/80",
        "pulse": 72
    },
    {
        "value": "140/80",
        "pulse": 68
    },
    {
        "value": "135/86",
        "pulse": 75
    },
    {
        "value": "109/78",
        "pulse": 72
    }
     ]
  }
]
reading: any;

ishighbp(bpvalue:string){
  const [systolic,diastolic]=bpvalue.split('/').map(Number);
  return systolic > 120 || diastolic > 80

}

}
