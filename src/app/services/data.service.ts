import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { CollegueMock } from '../mock/collegues.mock';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

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

  recupererCollegueCourant(): Collegue {
    // TODO retourner le collègue fictif à partir du fichier `src/app/mock/collegues.mock.ts`.
    return new CollegueMock().collegueMock;
  }

}
