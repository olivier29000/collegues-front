import { Component, OnInit,Input } from '@angular/core';
import { CollegueMock } from '../mock/collegues.mock';
import { Collegue } from '../models/collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

 
  listeDeMatricules: string[] = [];

  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

  debutDuNomDuCollegue:string="";
  maListeDeMatricules: string[]=this.dataService.rechercherParNom(this.debutDuNomDuCollegue);

  rechercheCollegue(debutDuNomDuCollegue:string){
    this.debutDuNomDuCollegue=debutDuNomDuCollegue;
    this.maListeDeMatricules=this.dataService.rechercherParNom(this.debutDuNomDuCollegue);
  }
  rechercheCollegueEnFonctionSaisie(debutDuNomDuCollegue:string):void{
    this.debutDuNomDuCollegue=debutDuNomDuCollegue;
  }
  
  rechercherPosts(nom:string) {
    this.dataService.trouverPosts(nom).subscribe(list => (this.listeDeMatricules = list));
  }

  afficherCollegue(matricule){
    console.log(matricule);
    this.dataService.publicationCollegueCourant(matricule);
  }

}
