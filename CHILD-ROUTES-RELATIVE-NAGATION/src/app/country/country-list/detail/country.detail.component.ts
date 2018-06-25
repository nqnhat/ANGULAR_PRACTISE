import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
//import 'rxjs/add/operator/switchMap';
import {switchMap} from "rxjs/operators";

import { CountryService } from '../../service/country.service';
import { Country } from '../../country';

@Component({
  templateUrl: './country.detail.component.html' 
}) 
export class CountryDetailComponent implements OnInit { 
    country: Country;
    constructor(
	        private countryService: CountryService,
		private route: ActivatedRoute) { }
    ngOnInit() {
       this.route.params.pipe(
        switchMap((params: Params) => this.countryService.getCountry(+params['country-id'])))
        .subscribe(country => this.country = country);
    }					
} 