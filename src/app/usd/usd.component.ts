import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import { Chart } from 'chart.js';

import { SbifService } from '../sbif.service';

@Component({
  selector: 'app-usd',
  templateUrl: './usd.component.html',
  styleUrls: ['./usd.component.css']
})
export class UsdComponent implements OnInit {

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

  saveData() {
    let data = {
      year: this.year,
      month: this.month
    }
    localStorage.setItem('data', JSON.stringify(data));
    window.location.reload();
  }

  ngOnInit() {
    this.value = localStorage.getItem('data');

    if(this.value != null) {
      this.data=JSON.parse(this.value);
    } else {
      this.data = {
        year: '2017',
        month: '01'
      }
    }

    this._sbif.getMonthlyUSD(this.data.year, this.data.month)
      .subscribe(res => {
        //console.log(res)

        this.monies = res;
        console.log(this.monies)

        let usd = res['Dolares']
          .map(res => res.Valor)
        console.log(usd)

        let dates = res['Dolares']
          .map(res => res.Fecha)
        console.log(dates)

        let usdInts = []
        usd.forEach((res) => {
          usdInts.push(parseInt(res))
        })
        console.log(usdInts)


        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: dates,
            datasets: [
              {
                data: usdInts,
                borderColor: '#ABEBC6',
                fill: false
              }
            ]
          },
          options: {
            responsive: true,
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
