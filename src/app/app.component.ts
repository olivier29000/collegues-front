import { Input,Component } from '@angular/core';
import { Collegue } from './models/Collegue';
import { CollegueMock } from './mock/collegues.mock';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  styles: []
})
export class AppComponent {

  unObjetCollegueFourni:Collegue=new CollegueMock().collegueMock;
  title = 'collegues-front';
  maListeDeCollegues:Collegue[]=new CollegueMock().listeDeCollegueMock;

  constructor() {
    
  }

  
}
