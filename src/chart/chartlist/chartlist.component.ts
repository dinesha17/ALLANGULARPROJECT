import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chartlist',
  templateUrl: './chartlist.component.html',
  styleUrls: ['./chartlist.component.css']
})
export class ChartlistComponent {


  chart: any = []
  constructor() {}

  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
