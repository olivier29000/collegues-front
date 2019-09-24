import { Injectable } from '@angular/core';
  // Noter ici que l'import est sur le fichier `environment` et non `environment.prod`.
  import {environment} from '../../environments/environment';
  import {
    HttpHeaders
  } from "@angular/common/http";
  import { HttpClient, HttpResponse, HttpErrorResponse } from "@angular/common/http";


const URL_BACKEND = environment.backendUrl;
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  }),
  withCredentials:true
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

authentification(email,password){
  this._http
  .post(
    // url d'accès au service
    URL_BACKEND + "/auth",

    // corps de la réquête
    {
      nomUtilisateur: "u1",
      motDePasse: "pass1"
    },

    // options de la requête HTTP
    httpOptions
  )
  .subscribe((data: any) => {
    console.log(data);
  },(error: HttpErrorResponse) => {
    console.log("error", error);
  });
  

}
  



  constructor(private _http:HttpClient) { }
}
