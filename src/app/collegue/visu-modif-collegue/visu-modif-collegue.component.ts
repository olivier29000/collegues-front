import { Component, OnInit,Input } from '@angular/core';
import { Collegue } from '../../models/Collegue';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';
import { CollegueComponent } from '../collegue.component';

@Component({
  selector: 'app-visu-modif-collegue',
  templateUrl: './visu-modif-collegue.component.html',
  styleUrls: ['./visu-modif-collegue.component.css']
})
export class VisuModifCollegueComponent implements OnInit {

  contrat: Subscription;
  modification:boolean=true;
  col: Collegue=this.dataService.recupererCollegueCourantAuDebut();
  collegueCourant:Collegue;
  
  personne = { email: '', urlPhoto: '' };

  constructor(private dataService:DataService, private collegueComponent :CollegueComponent) { }

  ngOnInit() {


    this.contrat = this.dataService.subPostObs.subscribe(collegue =>{

      console.log(collegue);
      this.col=collegue;
      
      console.log("email " + this.col.email)

      this.personne = { email: this.col.email, urlPhoto: this.col.photoUrl };
    });
      //this.col=this.dataService.recupererCollegueCourant(this.matriculeCourant)
  }

  
  

  creerUnNouveauCollegue(){
    console.log ("creerUnNouveauCollegue");
  }
  
  validerModificationCollegue(email,urlPhoto,matricule){
    console.log (this.personne);
    this.dataService.modifierCollegue(email,urlPhoto,matricule);
      this.modification=true;
    
  }
  
  retour(){
    this.modification=true;
  }
  modifierCollegue(){
    console.log ("modifierCollegue");
    
      this.modification=false;
  
  }
}
