import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ChartsModule} from 'ng2-charts'; 

import { AppComponent } from './app.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { BubbleChartComponent } from './components/bubble-chart/bubble-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    BubbleChartComponent,
    LineChartComponent,
    PieChartComponent,
    RadarChartComponent,
    DoughnutChartComponent
  ],
  imports: [
    BrowserModule, 
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
