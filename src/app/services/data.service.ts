import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { CollegueMock } from '../mock/collegues.mock';
import { HttpClient , HttpErrorResponse} from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { ObjetRechercheMatricule } from '../models/objetRechercheMatricule';
import {environment} from '../../environments/environment';
import {HttpHeaders} from "@angular/common/http";

const URL_BACKEND = environment.backendUrl;
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  }),
  withCredentials:true
};

interface CorpsGetPhoto {
  matricule: string;
  urlPhoto: string;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private matriculesCache:ObjetRechercheMatricule[]=[];
  private colleguesCache:Collegue[]=[];
  private subPost = new Subject<Collegue>();
  
  

  constructor(private http: HttpClient)  { }

  recupererCorpsGetPhoto():Observable<CorpsGetPhoto[]>{
    return this.http
    .get<CorpsGetPhoto[]>(`http://localhost:8081/collegues/photos`,{withCredentials: true})
    
    .pipe(
      tap(tableauDeCorpsGetPhoto => {
        return tableauDeCorpsGetPhoto}))
    }
  


  VerifierAdresseEmail() :Observable<string[]>{
    return this.http
        .get<Collegue[]>(`http://localhost:8081/collegues`,{withCredentials: true})
        
        .pipe(
          map(tableauDeCollegue => {
            return tableauDeCollegue.map(collegue=> collegue.email)}))
        }

  creerCollegue(nom,prenom,dateDeNaissance,email,urlPhoto){

    this.http
  .post(
    // url d'accès au service
    URL_BACKEND + `/collegues`,

    // corps de la réquête
    {
      nom:nom,
      prenoms:prenom,
      dateDeNaissance:dateDeNaissance,
      email: email,
      photoUrl: urlPhoto
    },

    // options de la requête HTTP
    httpOptions
  ).subscribe((data: any) => {
    console.log(data);
    //this.subConnecte.next(true);
    console.log("creation reussi");
    //this.modifierCollegueDansLeCache(email,urlPhoto,matricule);
  },(error: HttpErrorResponse) => {
    console.log("error", error);
    //this.subConnecte.next(false);
  });

  }


  recupererCollegueCourant(matricule:string): Observable<Collegue> {
    // TODO retourner le collègue fictif à partir du fichier `src/app/mock/collegues.mock.ts`.
    let cacheUtile:boolean=false;
    if (this.colleguesCache) {
      for (let collegue of this.colleguesCache) {
        if (collegue.matricule==matricule) {
          
          cacheUtile=true;
          return of (collegue);
        }
      } 
    }
    if (!cacheUtile) 
    
    
    return this.http
        .get<Collegue>(`http://localhost:8081/collegues/${matricule}`, { withCredentials: true})
        //.pipe(tap(list => (this.listeDeMatricules = list)));
        .pipe(
          tap(collegue => {
          this.colleguesCache.push(collegue)
        }));
  }

  modifierCollegue(email:string,urlPhoto:string,matricule:string){
    this.http
  .post(
    // url d'accès au service
    URL_BACKEND + `/collegues/${matricule}`,

    // corps de la réquête
    {
      email: email,
      photoUrl: urlPhoto
    },

    // options de la requête HTTP
    httpOptions
  ).subscribe((data: any) => {
    console.log(data);
    //this.subConnecte.next(true);
    console.log("modification reussi");
    this.modifierCollegueDansLeCache(email,urlPhoto,matricule);
  },(error: HttpErrorResponse) => {
    console.log("error", error);
    //this.subConnecte.next(false);
  });
  }

  modifierCollegueDansLeCache(email:string,urlPhoto:string,matricule:string){
    for (let collegue of this.colleguesCache) {
      if (collegue.matricule==matricule) {
        collegue.email=email;
        collegue.photoUrl=urlPhoto;
      }
    } 
  }

  recupererCollegueCourantAuDebut():Collegue{
    return new CollegueMock().collegueMock;
  }

  trouverPosts(nom:string): Observable<string[]> {
    let cacheUtile:boolean=false;
    if (this.matriculesCache) {
      for (let objetRechercheMatricule of this.matriculesCache) {
        if (objetRechercheMatricule.nom==nom) {
          
          cacheUtile=true;
          return of (objetRechercheMatricule.listeDeMatricules);
        }
      } 
    }
    if (!cacheUtile) {
      
      return this.http
        .get<string[]>(`http://localhost:8081/collegues?nom_collegue=${nom}`, { withCredentials: true})
        .pipe(
          tap(list => {
          this.matriculesCache.push(new ObjetRechercheMatricule(nom,list))
          
        }));

      
      
      
    }
  }

 

  publicationCollegueCourant (collegue:Collegue): void {
    this.subPost.next(collegue);
    
    //return of(this.postsCache);
  } 
  
  get subPostObs(): Observable<Collegue> {
    return this.subPost.asObservable();
  }


  
  }


