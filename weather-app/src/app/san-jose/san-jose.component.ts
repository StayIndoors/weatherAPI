import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
  sanjoseObj: any;

  constructor(private _route: ActivatedRoute, private _router: Router, private _apiservice: ApiService ) { }

  ngOnInit() {
    this.getCityInformation();
  }

  getCityInformation(){
    this._route.paramMap
    .subscribe((params)=>{
      let observable = this._apiservice.getCityInfo('sanjose');
      observable.subscribe((data: any)=>{
        console.log('getting data: ', data);
        this.sanjoseObj = data;
        this.sanjoseObj.main.temp = Math.round((9/5) * (this.sanjoseObj.main.temp - 273) + 32);
        this.sanjoseObj.main.temp_max = Math.round((9/5) * (this.sanjoseObj.main.temp_max - 273) + 32);
        this.sanjoseObj.main.temp_min = Math.round((9/5) * (this.sanjoseObj.main.temp_min - 273) + 32);
      })
    })
  }
}
