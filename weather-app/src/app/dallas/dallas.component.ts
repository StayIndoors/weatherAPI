import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  dallasObj: any;

  constructor(private _route: ActivatedRoute, private _router: Router, private _apiservice: ApiService ) { }

  ngOnInit() {
    this.getCityInformation();
  }

  getCityInformation(){
    this._route.paramMap
    .subscribe((params)=>{
      let observable = this._apiservice.getCityInfo('dallas');
      observable.subscribe((data: any)=>{
        console.log('getting data: ', data);
        this.dallasObj = data;
        this.dallasObj.main.temp = Math.round((9/5) * (this.dallasObj.main.temp - 273) + 32);
        this.dallasObj.main.temp_max = Math.round((9/5) * (this.dallasObj.main.temp_max - 273) + 32);
        this.dallasObj.main.temp_min = Math.round((9/5) * (this.dallasObj.main.temp_min - 273) + 32);
      })
    })
  }
}
