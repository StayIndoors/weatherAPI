import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  seattleObj: any;

  constructor(private _route: ActivatedRoute, private _router: Router, private _apiservice: ApiService ) { }

  ngOnInit() {
    this.getCityInformation();
  }

  getCityInformation(){
    this._route.paramMap
    .subscribe((params)=>{
      let observable = this._apiservice.getCityInfo('seattle');
      observable.subscribe((data: any)=>{
        console.log('getting data: ', data);
        this.seattleObj = data;
        this.seattleObj.main.temp = Math.round((9/5) * (this.seattleObj.main.temp - 273) + 32);
        this.seattleObj.main.temp_max = Math.round((9/5) * (this.seattleObj.main.temp_max - 273) + 32);
        this.seattleObj.main.temp_min = Math.round((9/5) * (this.seattleObj.main.temp_min - 273) + 32);
      })
    })
  }
}
