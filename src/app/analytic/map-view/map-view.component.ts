import { Component, OnInit } from '@angular/core';
import { MapChart } from 'angular-highcharts';
import indiaMap from '../../../assets/indiaMap';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  public mapChart: any;

  constructor() { }
  
  ngOnInit(): void {
    let data1: (string | number)[][] =[
      ['madhya pradesh', 10], ['uttar pradesh', 11], ['karnataka', 12],
      ['bihar', 14], ['assam', 17], ['west bengal', 18],
      ['gujarat', 21],
      ['rajasthan', 22],
       ['tamil nadu', 25],
       ['haryana', 28], ['andhra pradesh', 29],
      ['maharashtra', 30], 
      ['telangana', 34], ['odisha', 42]
      
  ];
  

console.log("indiaMap=",indiaMap);


  let vvv: any = [{
    data: data1,
    name: 'State data',
    showInLegend: true,
    legend: {
      bottom: 10,
        left: 'center',
        
    },
    states: {
      hover: {
          color: '#BADA55'
      }       
    },
    dataLabels: {
        enabled: true,
        // format: '{point.name}'
    }
    
}]
      this.mapChart = new MapChart({
        chart: {
                  map: indiaMap,
                  
              },
      series: vvv,
      credits: {
        enabled: false
    },
    title: {
      text: 'My custom title',
      // align: 'left',
      // y: 340 //  this to move y-coordinate of title to desired location
  },
    //   colorAxis: {
    //     min: 1,
    //     max: 1000,
    //     type: 'logarithmic',
    //     minColor: '#efecf3',
    //     maxColor: '#990041'
    // },
      // colorAxis: {
      //   min: 0
      // },
      });
  }

}
