import { Injectable } from '@angular/core';
import { Http, Headers, Response, ResponseOptions } from '@angular/http';
/*import {Observable} from 'rxjs/Observable';*/
import 'rxjs/add/operator/map';


/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ServiceProvider {

  // api : string = 'http://localhost:8082/api/api/';
  api : string = 'http://localhost/APIs/';

  constructor(public http: Http) {
    console.log('Hello ServiceProvider Provider');

    this.getData()
  }

  getData(){
     return this.http.get(this.api + 'apiRecupera.php').map(res => res.json())
  }

  postData(parans){
    let headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded'});
    
    return this.http.post(this.api+'apiCadastro.php', parans,{
      headers : headers,
      method : 'POST'
    }).map (
      (res : Response) => {return res.json}
    );
  }

}
