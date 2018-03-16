import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  dcObj: any;

  constructor(private _route: ActivatedRoute, private _router: Router, private _apiservice: ApiService ) { }

  ngOnInit() {
    this.getCityInformation();
  }

  getCityInformation(){
    this._route.paramMap
    .subscribe((params)=>{
      let observable = this._apiservice.getCityInfo('dc');
      observable.subscribe((data: any)=>{
        console.log('getting data: ', data);
        this.dcObj = data;
        this.dcObj.main.temp = Math.round((9/5) * (this.dcObj.main.temp - 273) + 32);
        this.dcObj.main.temp_max = Math.round((9/5) * (this.dcObj.main.temp_max - 273) + 32);
        this.dcObj.main.temp_min = Math.round((9/5) * (this.dcObj.main.temp_min - 273) + 32);
      })
    })
  }
}

