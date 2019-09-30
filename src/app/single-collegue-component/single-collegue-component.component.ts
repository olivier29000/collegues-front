import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-single-collegue-component',
  templateUrl: './single-collegue-component.component.html',
  styleUrls: ['./single-collegue-component.component.css']
})
export class SingleCollegueComponentComponent implements OnInit {

  matricule:string;
  collegue:Collegue;
  constructor(private route: ActivatedRoute, private dataService:DataService) { }

  ngOnInit() {
    this.matricule = this.route.snapshot.params['matricule'];
    
    this.dataService.recupererCollegueCourant(this.matricule).subscribe((data: any) => {
      console.log(data);
      //this.subConnecte.next(true);
      this.collegue=data;
      console.log(this.collegue);
    },(error: HttpErrorResponse) => {
      console.log("error", error);
      //this.subConnecte.next(false);
    })
  }

}
