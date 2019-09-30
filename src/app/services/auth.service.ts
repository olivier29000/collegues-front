import { Injectable } from '@angular/core';
  // Noter ici que l'import est sur le fichier `environment` et non `environment.prod`.
  import {environment} from '../../environments/environment';
  import {
    HttpHeaders
  } from "@angular/common/http";
  import { HttpClient, HttpResponse, HttpErrorResponse } from "@angular/common/http";
  import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
  import { tap, map } from 'rxjs/operators';
import { Router } from "@angular/router";

  
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

  private subConnecte = new BehaviorSubject(false);

  constructor(private _http:HttpClient,private router:Router) { }

authentification(_nomUtilisateur,_motDePasse){
  this._http
  .post(
    // url d'accès au service
    URL_BACKEND + "/auth",

    // corps de la réquête
    {
      nomUtilisateur: _nomUtilisateur,
      motDePasse: _motDePasse
    },

    // options de la requête HTTP
    httpOptions
  )
  .subscribe((data: any) => {
    this.subConnecte.next(true);
    this.router.navigate(["accueil"])
  },(error: HttpErrorResponse) => {
    console.log("error", error);
    this.subConnecte.next(false);
  });
}

  get subConnecteObs(): Observable<Boolean> {
    return this.subConnecte.asObservable();
  }
  
  

  isLoggedIn():Observable<any>{
    return this._http.get(`${URL_BACKEND}/auth/user`,{withCredentials: true})
  }

  seDeconnecter(){
    return this._http.post(`${URL_BACKEND}/logout`,null,{withCredentials: true});
  }

}

