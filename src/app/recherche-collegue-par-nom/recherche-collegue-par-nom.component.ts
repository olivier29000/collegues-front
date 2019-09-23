import { Component, OnInit,Input } from '@angular/core';
import { CollegueMock } from '../mock/collegues.mock';
import { Collegue } from '../models/collegue';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  @Input() maListeDeCollegues: Collegue[];
  debutDuNomDuCollegue:string;
  constructor() { }

  rechercheCollegue(recherche:string){
    this.debutDuNomDuCollegue=recherche;
  }

  ngOnInit() {
  }

}
