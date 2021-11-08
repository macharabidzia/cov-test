import { BehaviorSubject } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss'],
})
export class AreaChartComponent implements OnInit {
  @Input() chartData: BehaviorSubject<{}> = new BehaviorSubject({});
  myChart: any;
  constructor() {}
  ngOnInit(): void {
    this.chartData.subscribe((subscriber: any) => {
      console.log(subscriber);
      if (this.myChart) this.myChart.destroy();
      const data = {
        datasets: subscriber,
      };
      const config: any = {
        type: 'line',
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      };
      this.myChart = new Chart('myChart', config);
    });
  }
}
