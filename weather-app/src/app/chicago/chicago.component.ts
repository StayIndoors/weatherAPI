import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  chicagoObj: any;

  constructor(private _route: ActivatedRoute, private _router: Router, private _apiservice: ApiService ) { }

  ngOnInit() {
    this.getCityInformation();
  }

  getCityInformation(){
    this._route.paramMap
    .subscribe((params)=>{
      let observable = this._apiservice.getCityInfo('chicago');
      observable.subscribe((data: any)=>{
        console.log('getting data: ', data);
        this.chicagoObj = data;
        this.chicagoObj.main.temp = Math.round((9/5) * (this.chicagoObj.main.temp - 273) + 32);
        this.chicagoObj.main.temp_max = Math.round((9/5) * (this.chicagoObj.main.temp_max - 273) + 32);
        this.chicagoObj.main.temp_min = Math.round((9/5) * (this.chicagoObj.main.temp_min - 273) + 32);
      })
    })
  }
}
