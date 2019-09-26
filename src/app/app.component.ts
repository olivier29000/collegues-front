import { Input,Component } from '@angular/core';
import { Collegue } from './models/Collegue';
import { CollegueMock } from './mock/collegues.mock';
import { Subscription } from 'rxjs';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  styles: []
})
export class AppComponent {

  
  title = 'collegues-front';

  contratConnexion: Subscription;
  
  connexion:Boolean;
  

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.contratConnexion = this.authService.subConnecteObs.subscribe(booleanConnexion =>{

      this.connexion=booleanConnexion});


      

      //this.col=this.dataService.recupererCollegueCourant(this.matriculeCourant)
  }





  

  
}
