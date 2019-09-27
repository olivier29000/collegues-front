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
  collegueCourant:Collegue;
  creationCollegue:boolean=false;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.contrat = this.dataService.subPostObs.subscribe(collegue =>{

      console.log(collegue);
      this.collegueCourant=collegue;
      this.retour()
      

      
    });
  }

  retour(){
    this.creationCollegue=true;
  }
  modifierVisualiserCollegue(){
    console.log ("modifierCollegue");
    
      this.creationCollegue=false;
  
  }

  

}
