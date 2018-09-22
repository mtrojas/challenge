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
  monies: any;

  constructor(
    private _sbif: SbifService
  ) { }

  ngOnInit() {
    this._sbif.getMonthlyTMC(this.year, this.month)
    .subscribe(res => {
      console.log(res)



    })
  }

}
