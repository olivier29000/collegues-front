import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { CollegueMock } from '../mock/collegues.mock';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { ObjetRechercheMatricule } from '../models/objetRechercheMatricule';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private matriculesCache:ObjetRechercheMatricule[]=[];
  private colleguesCache:Collegue[]=[];
  private subPost = new Subject<Collegue>();
  private subConnecte = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

  

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


