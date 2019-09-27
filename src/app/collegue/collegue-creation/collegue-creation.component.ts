import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-collegue-creation',
  templateUrl: './collegue-creation.component.html',
  styleUrls: ['./collegue-creation.component.css']
})
export class CollegueCreationComponent implements OnInit {


  personne = { nom: '', prenom:'' ,dateDeNaissance:'' ,email: '', urlPhoto: '' };


  constructor( private dataService : DataService) { }

  ngOnInit() {
  }

  creerCollegue(nom:string,prenom:string,dateDeNaissance:NgbDate,email:string,urlPhoto:string){
    console.log("creerCollegue")
    console.log(dateDeNaissance)
    console.log(dateDeNaissance)
    let mois:string;
    if (dateDeNaissance.month<10) {
      console.log("un zero een plus")
      mois="-0"+dateDeNaissance.month+"-"
    } else {
      mois="-"+dateDeNaissance.month+"-"
    }

    let jour:string;
    if (dateDeNaissance.day<10) {
      console.log("un zero een plus")
      jour="0"+dateDeNaissance.day
    } else {
      jour=""+dateDeNaissance.day
    }

    const dateDeNaissanceString:string=dateDeNaissance.year+mois+jour
    console.log(dateDeNaissanceString)
    this.dataService.creerCollegue(nom,prenom,dateDeNaissanceString,email,urlPhoto);
  }

  retour(){
    console.log("retour")
  }

}
