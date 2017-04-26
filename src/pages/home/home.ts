import { Component, OnInit } from '@angular/core';
//import { Validators, FormBuilder } from '@angular/forms'; //form 1
import { NgForm } from '@angular/forms';
import { NavController } from 'ionic-angular';

import {ServiceProvider} from '../../providers/service-provider';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  ngOnInit(){
    this.getDados();
  }

  cadastro : any = {};
  users : any[];
  deveMostrarNome : boolean = true;
  nomeTeste : string;
  emailTeste : string = "";

  teste:string = "testando 2...";

  constructor(public navCtrl: NavController, 
              /*public formBuilder : FormBuilder, do form 1*/
               public service : ServiceProvider,
               public alertCtrl: AlertController) {
    console.log('home constructor');
    /*this.cadastro = this.formBuilder.group({ //do form 1
        nome:['', Validators.required],
        email:['', Validators.required],
        senha:['', Validators.required]
    });*/
  }

  getDados(){
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
            (data) => {
              console.log(data.mensage)
              this.getDados();
            },
            err => console.log(err)
        );
  }

  deletarPerfil(user){
    console.log(user.id);
    this.service.deletaData(user.id)
        .subscribe(
            (data) => {
              console.log(data.mensage);
              this.getDados();
              //this.teste2();
            },
            err => console.log(err)
        );
  }

  editarPerfil(user) {
    let prompt = this.alertCtrl.create({
      title: 'Editar perfil',
      inputs: [
        {
          name: 'nome',
          placeholder: 'nome',
          value:user.nome
        },
        {
          name: 'email',
          placeholder: 'email',
          value:user.email
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Salvar',
          handler: data => {

            let params:any={
              id:user.id,
              nome:data.nome,
              email:data.email
            }
            console.log(data);
            this.service.updateData(params)
            .subscribe(
                (data) => {
                  console.log(data.mensage)
                  this.getDados();
                },
                err => console.log(err)
            );
          }
        }
      ]
    });
    prompt.present();
  }

}
