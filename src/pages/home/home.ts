import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NavController } from 'ionic-angular';

import {ServiceProvider} from '../../providers/service-provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  ngOnInit(){
    this.getData();
  }

  cadastro : any = {};
  users : any[];
  nome : boolean = false;
  nomeTeste : string;
  email : string = "";

  teste:string = "testando 2...";
  constructor(public navCtrl: NavController, public formBuilder : FormBuilder,
               public service : ServiceProvider) {
    console.log('home constructor');
    this.cadastro = this.formBuilder.group({
        nome:['', Validators.required],
        email:['', Validators.required],
        senha:['', Validators.required]
    });
  }

  getData(){
    this.service.getData()
        .subscribe(
        data => this.users = data,
        err => console.log(err)
    );
  }

  mostraNome(){
      this.nome = !this.nome;
  };

  postDados(){
    console.log(this.cadastro.value)
  }

}
