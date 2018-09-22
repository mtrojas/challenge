import { Component, OnInit } from '@angular/core';

//import { map } from 'rxjs/operators';
import { Chart } from 'chart.js';

import { SbifService } from '../sbif.service';

@Component({
  selector: 'app-uf',
  templateUrl: './uf.component.html',
  styleUrls: ['./uf.component.css']
})
export class UfComponent implements OnInit {

  chart = [];

  data = {
    year: '2017',
    month: '01'
  }

  year: string;
  month: string;

  value: any;
  monies: any;

  constructor(
    private _sbif: SbifService
  ) { }

  ngOnInit() {
        this._sbif.getMonthlyUF(this.year, this.month)
      .subscribe(res => {
        console.log(res)

        let uf = res['UFs']
          .map(res => res.Valor)
        console.log(uf)

        let dates = res['UFs']
          .map(res => res.Fecha)
        console.log(dates)

        let ufInts = []
        uf.forEach((res) => {
          ufInts.push(parseInt(res.split('.').join('')))
        })
        console.log(ufInts)

        //checkedNew = checked.split('.').join("");


        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: dates,
            datasets: [
              {
                data: ufInts,
                borderColor: '#3cba9f',
                fill: false
              }
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [
                {
                  display: true
                }
              ],
              yAxes: [
                {
                  display: true
                }
              ]
            }
          }
        })

      })
  }

}
