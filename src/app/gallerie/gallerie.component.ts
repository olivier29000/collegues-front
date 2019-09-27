import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


interface CorpsGetPhoto {
  matricule: string;
  urlPhoto: string;
}

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {


  listeDePhoto:CorpsGetPhoto[]=[];

  constructor(private dataService:DataService,private router: Router) { }

  ngOnInit() {
    this.dataService.recupererCorpsGetPhoto().subscribe(listCorpsGetPhoto => {this.listeDePhoto = listCorpsGetPhoto;console.log(this.listeDePhoto)},
    (error :HttpErrorResponse)  => (this.listeDePhoto=[{matricule:"problème lors de la récuperation des données",urlPhoto:"problème lors de la récuperation des données"}]),
     () => console.log('DONE!'));
  }

  redirection(matricule){
    this.router.navigate([`/gallerie/${matricule}`]
    )
  }

}
