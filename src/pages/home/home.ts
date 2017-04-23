import { Component, OnInit } from '@angular/core';
//import { Validators, FormBuilder } from '@angular/forms'; //form 1
import { NgForm } from '@angular/forms';
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
  deveMostrarNome : boolean = true;
  nomeTeste : string;
  emailTeste : string = "";

  teste:string = "testando 2...";
  constructor(public navCtrl: NavController, 
              /*public formBuilder : FormBuilder, do form 1*/
               public service : ServiceProvider) {
    console.log('home constructor');
    /*this.cadastro = this.formBuilder.group({ //do form 1
        nome:['', Validators.required],
        email:['', Validators.required],
        senha:['', Validators.required]
    });*/
  }

  getData(){
    this.service.getData()
        .subscribe(
        data => this.users = data,
        err => console.log(err)
    );
  }

  mostraNome(){
      this.deveMostrarNome = !this.deveMostrarNome;
  };

  postDados(){
    console.log(this.cadastro.value)
  }

  postDadosForm2(req){
   console.log(req.value);
   this.service.postData(req.value)
        .subscribe(
            function(data){
              console.log(data.mensage)
            },
            err => console.log(err)
        );
  }

}
