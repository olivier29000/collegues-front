import { Component, OnInit,Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  col: Collegue=new DataService().recupererCollegueCourant();
  modification:boolean=true;

  constructor() { }

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
  ngOnInit() {
  }

}
