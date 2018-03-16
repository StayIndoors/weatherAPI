import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  burbankObj: any;

  constructor(private _route: ActivatedRoute, private _router: Router, private _apiservice: ApiService ) { }

  ngOnInit() {
    this.getCityInformation();
  }

  getCityInformation(){
    this._route.paramMap
    .subscribe((params)=>{
      let observable = this._apiservice.getCityInfo('burbank');
      observable.subscribe((data: any)=>{
        console.log('getting data: ', data);
        this.burbankObj = data;
        this.burbankObj.main.temp = Math.round((9/5) * (this.burbankObj.main.temp - 273) + 32);
        this.burbankObj.main.temp_max = Math.round((9/5) * (this.burbankObj.main.temp_max - 273) + 32);
        this.burbankObj.main.temp_min = Math.round((9/5) * (this.burbankObj.main.temp_min - 273) + 32);
      })
    })
  }
}
