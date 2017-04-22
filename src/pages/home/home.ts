import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {ServiceProvider} from '../../providers/service-provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users : any[];

  teste:string = "testando 2...";
  constructor(public navCtrl: NavController, public service : ServiceProvider) {
    console.log('home constructor');
    this.getData();
  }

  getData(){
    this.service.getData()
        .subscribe(
        data => this.users = data,
        err => console.log(err)
    );
  }

}
