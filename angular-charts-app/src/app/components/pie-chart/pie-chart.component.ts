import { Component, OnInit } from '@angular/core';
import {ChartType, ChartOptions} from 'chart.js'; 
import {SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip} from 'ng2-charts'; 

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  pieChartOptions: ChartOptions = {
    responsive: true
  }

  pieChartLabels: Label[] = [['SciFi'], ['Drama'], ['Comedy']]; 
  pieChartData: SingleDataSet = [30, 50, 20]; 
  pieChartType: ChartType = 'pie'; 
  pieChartLegend: Boolean = true; 
  pieChartPlugins: []

  constructor() {
    monkeyPatchChartJsTooltip()
    monkeyPatchChartJsLegend()
   }

  ngOnInit(): void {
  }

}
