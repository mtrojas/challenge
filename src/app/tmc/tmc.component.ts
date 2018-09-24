import { Component, OnInit } from '@angular/core';

//import { map } from 'rxjs/operators';
import { Chart } from 'chart.js';

import { SbifService } from '../sbif.service';

@Component({
  selector: 'app-tmc',
  templateUrl: './tmc.component.html',
  styleUrls: ['./tmc.component.css']
})
export class TmcComponent implements OnInit {

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

    this._sbif.getMonthlyTMC(this.data.year, this.data.month)
    .subscribe(res => {
      console.log(res)

    })
  }

}
