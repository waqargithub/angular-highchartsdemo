//Import dependencies, load modules
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import {MatButtonModule} from '@angular/material/button';


declare var require: any;

const IndicatorsCore = require("highcharts/indicators/indicators");
IndicatorsCore(Highcharts);

//const IndicatorZigZag = require("highcharts/indicators/zigzag");
//IndicatorZigZag(Highcharts);

@Component({
  selector: 'app-output-graph',
  templateUrl: './output-graph.component.html',
  styleUrls: ['./output-graph.component.css']
})


export class OutputGraphComponent implements OnInit {
  //Attributes to modify chart
  private myChart: any;

  //Attributes to modify text on buttons used to modify chart  
  private redrawBtnColorChoice: string = "White";
  private bGroundBtnColorChoice: string = "White";
  private legendBtnChoice: string = "Tooltip";
  private chartTypeBtnChoice: string = "Candlestick";
  
  //Define chart options
  private options: any = {
    chart: {
      type: 'ohlc',
      height: 250,
      backgroundColor:'#AFF1FF',
    },
    title: {
      text: 'Sample Stock Chart'
    },
    credits: {
      enabled: true
    },
    xAxis: {
      type: 'datetime',
      labels: {
        formatter: function() {
          return Highcharts.dateFormat('%e %b %y', this.value);
        }
      }
    },
    legend: {
      enabled: true
    },
    tooltip: {
        split: true,
        //distance: 30,
        padding: 5
    },
    plotOptions: {
      series: {
        showInLegend: true
      }
    },  
    series: [
      {
        id: "aapl",
        name: "AAPL Stock Price",
        color: "#0000ff",
        data: [
          [1528983000000, 191.55, 191.57, 190.22, 190.8],
          [1529069400000, 190.03, 190.16, 188.26, 188.84],
          [1529328600000, 187.88, 189.22, 187.2, 188.74],
          [1529415000000, 185.14, 186.33, 183.45, 185.69],
          [1529501400000, 186.35, 187.2, 185.73, 186.5],
          [1529587800000, 187.25, 188.35, 184.94, 185.46],
          [1529674200000, 186.12, 186.15, 184.7, 184.92],
          [1529933400000, 183.4, 184.92, 180.73, 182.17],
          [1530019800000, 182.99, 186.53, 182.54, 184.43],
          [1530106200000, 185.23, 187.28, 184.03, 184.16],
          [1530192600000, 184.1, 186.21, 183.8, 185.5],
          [1530279000000, 186.29, 187.19, 182.91, 185.11],
          [1530538200000, 183.82, 187.3, 183.42, 187.18],
          [1530624600000, 187.79, 187.95, 183.54, 183.92],
          [1530797400000, 185.26, 186.41, 184.28, 185.4],
          [1530883800000, 185.42, 188.43, 185.2, 187.97],
          [1531143000000, 189.5, 190.68, 189.3, 190.58],
          [1531229400000, 190.71, 191.28, 190.18, 190.35],
          [1531315800000, 188.5, 189.78, 187.61, 187.88],
          [1531402200000, 189.53, 191.41, 189.31, 191.03],
          [1531488600000, 191.08, 191.84, 190.9, 191.33],
          [1531747800000, 191.52, 192.65, 190.42, 190.91],
          [1531834200000, 189.75, 191.87, 189.2, 191.45],
          [1531920600000, 191.78, 191.8, 189.93, 190.4],
          [1532007000000, 189.69, 192.55, 189.69, 191.88],
          [1532093400000, 191.78, 192.43, 190.17, 191.44],
          [1532352600000, 190.68, 191.96, 189.56, 191.61],
          [1532439000000, 192.45, 193.66, 192.05, 193],
          [1532525400000, 193.06, 194.85, 192.43, 194.82],
          [1532611800000, 194.61, 195.96, 193.61, 194.21],
          [1532698200000, 194.99, 195.19, 190.1, 190.98],
          [1532957400000, 191.9, 192.2, 189.07, 189.91],
          [1533043800000, 190.3, 192.14, 189.34, 190.29],
          [1533130200000, 199.13, 201.76, 197.31, 201.5],
          [1533216600000, 200.58, 208.38, 200.35, 207.39],
          [1533303000000, 207.03, 208.74, 205.48, 207.99],
          [1533562200000, 208, 209.25, 207.07, 209.07],
          [1533648600000, 209.32, 209.5, 206.76, 207.11],
          [1533735000000, 206.05, 207.81, 204.52, 207.25],
          [1533821400000, 209.53, 209.78, 207.2, 208.88],
          [1533907800000, 207.36, 209.1, 206.67, 207.53],
          [1534167000000, 209.31, 210.95, 207.7, 208.87],
          [1534253400000, 210.16, 210.56, 208.26, 209.75],
          [1534339800000, 209.22, 210.74, 208.33, 210.24],
          [1534426200000, 211.75, 213.81, 211.47, 213.32],
          [1534512600000, 213.44, 217.95, 213.16, 217.58],
          [1534771800000, 218.1, 219.18, 215.11, 215.46],
          [1534858200000, 216.8, 217.19, 214.03, 215.04],
          [1534944600000, 214.1, 216.36, 213.84, 215.05],
          [1535031000000, 214.65, 217.05, 214.6, 215.49],
          [1535117400000, 216.6, 216.9, 215.11, 216.16],
          [1535376600000, 217.15, 218.74, 216.33, 217.94],
          [1535463000000, 219.01, 220.54, 218.92, 219.7],
          [1535549400000, 220.15, 223.49, 219.41, 222.98],
          [1535635800000, 223.25, 228.26, 222.4, 225.03],
          [1535722200000, 226.51, 228.87, 226, 227.63],
          [1536067800000, 228.41, 229.18, 226.63, 228.36],
          [1536154200000, 228.99, 229.67, 225.1, 226.87],
          [1536240600000, 226.23, 227.35, 221.3, 223.1],
          [1536327000000, 221.85, 225.37, 220.71, 221.3],
          [1536586200000, 220.95, 221.85, 216.47, 218.33],
          [1536672600000, 218.01, 224.3, 216.56, 223.85],
          [1536759000000, 224.94, 225, 219.84, 221.07],
          [1536845400000, 223.52, 228.35, 222.57, 226.41],
          [1536931800000, 225.75, 226.84, 222.52, 223.84],
          [1537191000000, 222.15, 222.95, 217.27, 217.88],
          [1537277400000, 217.79, 221.85, 217.12, 218.24],
          [1537363800000, 218.5, 219.62, 215.3, 218.37],
          [1537450200000, 220.24, 222.28, 219.15, 220.03],
          [1537536600000, 220.78, 221.36, 217.29, 217.66],
          [1537795800000, 216.82, 221.26, 216.63, 220.79],
          [1537882200000, 219.75, 222.82, 219.7, 222.19],
          [1537968600000, 221, 223.75, 219.76, 220.42],
          [1538055000000, 223.82, 226.44, 223.54, 224.95],
          [1538141400000, 224.79, 225.84, 224.02, 225.74],
          [1538400600000, 227.95, 229.42, 226.35, 227.26],
          [1538487000000, 227.25, 230, 226.63, 229.28],
          [1538573400000, 230.05, 233.47, 229.78, 232.07],
          [1538662700000, 230.78, 232.33, 229.07, 230.15]
        ]
      },
      {//Technical indicators
        type: "sma",
        color: "#ff8c00",
        linkedTo: "aapl",
        params: {
          period: 7
        }
      },
      {
        type: "sma",
        color: "#4caf50",
        linkedTo: "aapl",
        params: {
          period: 14
        }
      }
    ]
  }

  constructor() { }

  ngOnInit(){
    //get reference to chart
     this.myChart = Highcharts.chart('container', this.options);
  }

  //Toggles background color between blue and white.
  //Redraws chart. Background color can be changed without //redrawing chart. Done this way for sake of variety for demo.
  redrawBackgroundColor() {

    //If background color is white then make it blue,
    //else make it white
    //Update text for both button that change background color
    if (this.options.chart.backgroundColor == "#ffffff") {
      this.options.chart.backgroundColor = "#AFF1FF";
      this.redrawBtnColorChoice = "White";
      this.bGroundBtnColorChoice = "White";
    }
    else {
      this.options.chart.backgroundColor = "#ffffff";
      this.redrawBtnColorChoice = "Blue";
      this.bGroundBtnColorChoice = "Blue";
    }

    //Update chart
    this.myChart = Highcharts.chart('container', this.options);
  }

  //Toggles background color between blue and red.
  toggleBackgroundColor() {

    //get current background color
   // let backgroundColor: string = this.options.chart.backgroundColor; 

    let backgroundColor: string = this.myChart.options.chart.backgroundColor;  
    
    //If background color is white then make it blue,
    //else make it white
    //Update text for both button that change background color
    if (backgroundColor == "#ffffff") {
      backgroundColor = "#AFF1FF";
      this.bGroundBtnColorChoice = "White";
      this.redrawBtnColorChoice = "White";
    }
    else {
      backgroundColor = "#ffffff"
      this.bGroundBtnColorChoice = "Blue";
      this.redrawBtnColorChoice = "Blue";
    }

    //Update chart
    //this.options.chart.backgroundColor = backgroundColor;
    this.myChart.update({

      chart: {
        backgroundColor: backgroundColor
      }
    });
  }

  //Toggles between displaying legend and tooltip
  toggleLegend() {

    //If legend visible then instead display tooltip,
    //else display legend
    //update text for button that toggles between the two

  //  let legendVisible: boolean = this.options.legend.enabled;

    let legendVisible: boolean = this.myChart.options.legend.enabled;  

    if (legendVisible == true) {
      legendVisible = false;
      this.legendBtnChoice = "Legend";
    }
    else {
      legendVisible = true;
      this.legendBtnChoice = "Tooltip";
    }

    //update chart
  //  this.options.legend.enabled = legendVisible;
    this.myChart.update({
      legend: {
        enabled: legendVisible
      }
    })
  }

  //Toggles between OHLC and Candlestick display
   toggleChartType() {
    
    //let chartType: string = this.options.chart.type;
    let chartType: string = this.myChart.options.chart.type;    

    //If chart type is ohlc, change to candlestick
    //else change to ohlc
    //Update text for toggle button
    if (chartType == 'ohlc') {
      chartType = 'candlestick';
      this.chartTypeBtnChoice ="OHLC";
    }
    else {
      chartType = 'ohlc';
      this.chartTypeBtnChoice ="Candlestick";
    }

    //update chart
    //this.options.chart.type = chartType;
    this.myChart.update({
      chart: {
        type: chartType
      }
    });
  } 
}