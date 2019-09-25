import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { CollegueMock } from '../mock/collegues.mock';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private listeDeMatricules: string[];

  private subPost = new Subject<string>();

  constructor(private http: HttpClient) { }

  rechercherParNom(nom: string): string[]  {
    // TODO retourner une liste de matricules fictifs à partir du fichier `src/app/mock/matricules.mock.ts`.  
    const listeDeMatriculesRetour: string[] = [];
    const listeDeCollegue: Collegue[] = new CollegueMock().listeDeCollegueMock;
    for (let collegue of listeDeCollegue) {
      if (collegue.nom.substr(0,nom.length)==nom) {
        listeDeMatriculesRetour.push(collegue.matricule)
      }
      
    }
    return listeDeMatriculesRetour;
  }

  recupererCollegueCourant(matricule:string): Observable<Collegue> {
    // TODO retourner le collègue fictif à partir du fichier `src/app/mock/collegues.mock.ts`.
    return this.http
        .get<Collegue>(`http://localhost:8081/collegues/${matricule}`, { withCredentials: true})
        //.pipe(tap(list => (this.listeDeMatricules = list)));
   
  }

  recupererCollegueCourantAuDebut():Collegue{
    return new CollegueMock().collegueMock;
  }

  trouverPosts(nom:string): Observable<string[]> {
    
      return this.http
        .get<string[]>(`http://localhost:8081/collegues?nom_collegue=${nom}`, { withCredentials: true})
        //.pipe(tap(list => (this.listeDeMatricules = list)));
    }

 

  publicationCollegueCourant (matricule:string): void {
    this.subPost.next(matricule);
    
    //return of(this.postsCache);
  } 
  
  get subPostObs(): Observable<string> {
    return this.subPost.asObservable();
  }
  }


