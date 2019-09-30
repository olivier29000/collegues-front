import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { AproposComponent } from './apropos/apropos.component';
import { VisuModifCollegueComponent } from './collegue/visu-modif-collegue/visu-modif-collegue.component';
import { SingleCollegueComponentComponent } from './single-collegue-component/single-collegue-component.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ConnexionGuardService } from './services/connexion-guard.service';

export const ROUTES: Routes = [
  {path: 'login', component: AuthentificationComponent },
  { path: '',
  canActivate: [ConnexionGuardService],
  children: [
    
    { path: 'accueil', component: AccueilComponent },
    { path: 'gallerie', component: GallerieComponent },
    { path: 'apropos', component: AproposComponent },
    { path: 'gallerie/:matricule', component: SingleCollegueComponentComponent }
  ]}];