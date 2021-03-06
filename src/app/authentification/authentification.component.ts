import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  authentification(email:string,password:string){
    console.log("nomUtilisateur : " + email,"password : " +password)
    this.authService.authentification(email,password)
    return false;
  }

}
