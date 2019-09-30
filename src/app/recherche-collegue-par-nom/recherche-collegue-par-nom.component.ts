import { Component, OnInit,Input } from '@angular/core';
import { CollegueMock } from '../mock/collegues.mock';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CollegueComponent } from '../collegue/collegue.component';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

 
  listeDeMatricules: string[] = [];
collegueCourant:Collegue;
  constructor(private dataService:DataService,private collegueComponant:CollegueComponent) { }

  ngOnInit() {
  }

  
  
  
  
  rechercherPosts(nom:string) {
    this.dataService.trouverPosts(nom).subscribe(list => (this.listeDeMatricules = list),
    (error :HttpErrorResponse)  => (this.listeDeMatricules=["problème lors de la récuperation des données"]),
     () => console.log('DONE!'));
  }

  afficherCollegue(matricule){
    
    
    console.log("fdhhrthtjhrh")
    this.dataService.recupererCollegueCourant(matricule).subscribe(collegue=>this.dataService.publicationCollegueCourant(collegue),
    (error :HttpErrorResponse) => {this.dataService.publicationCollegueCourant((new Collegue("problème lors de la récuperation des données","problème lors de la récuperation des données","problème lors de la récuperation des données","problème lors de la récuperation des données",new Date(),"problème lors de la récuperation des données")))
    console.log("HttpErrorResponse")}// () => console.log('DONE!');
    
    );
    
    
  }
    

}
