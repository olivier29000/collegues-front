import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

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

  creerCollegue(nom:string,prenom:string,dateDeNaissance:Date,email:string,urlPhoto:string){
    console.log("creerCollegue")
    this.dataService.creerCollegue(nom,prenom,dateDeNaissance,email,urlPhoto);
  }

  retour(){
    console.log("retour")
  }

}
