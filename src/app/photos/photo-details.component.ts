
import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
    templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit, OnDestroy {
    id:number;
    subscription;

    constructor(private _route:ActivatedRoute) { }

    ngOnInit() {
      this.subscription = this._route.params.subscribe(param=> {
      this.id = +param['id']; })
    // this.id = this._route.snapshot.params['id'];
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
       
    }
}