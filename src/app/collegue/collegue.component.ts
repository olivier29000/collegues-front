import { Component, OnInit,Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
  contrat: Subscription;
  col: Collegue=this.dataService.recupererCollegueCourantAuDebut();
  collegueCourant:Collegue;
  modification:boolean=true;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.contrat = this.dataService.subPostObs.subscribe(collegue =>{

      console.log(collegue);
      this.col=collegue;
      
      console.log("autre " + this.col)});

      

      //this.col=this.dataService.recupererCollegueCourant(this.matriculeCourant)
  }

  creerUnNouveauCollegue(){
    console.log ("creerUnNouveauCollegue");
  }

  modifierCollegue(){
    console.log ("modifierCollegue");
    
      this.modification=false;
  
  }
  validerCollegue(){
    console.log ("validerCollegue");
      this.modification=true;
    
  }
  

}
