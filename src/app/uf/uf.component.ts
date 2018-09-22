import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
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

    this._sbif.getMonthlyUF(this.data.year, this.data.month)
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

        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: dates,
            datasets: [
              {
                data: ufInts,
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
