import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { MenuComponent } from './menu/menu.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CollegueCreationComponent } from './collegue/collegue-creation/collegue-creation.component';

import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { AproposComponent } from './apropos/apropos.component';
import { ROUTES } from './app.routes'
import { VisuModifCollegueComponent } from './collegue/visu-modif-collegue/visu-modif-collegue.component';
import { UrlValidatorDirective } from './validators/url-validator.directive';
import { EmailValidatorDirective } from './validators/email-validator.directive';
import { SingleCollegueComponentComponent } from './single-collegue-component/single-collegue-component.component';




@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent,
    MenuComponent,
    AuthentificationComponent,
    CollegueCreationComponent,
    VisuModifCollegueComponent,
    UrlValidatorDirective,
    EmailValidatorDirective,
    AccueilComponent,
    GallerieComponent,
    AproposComponent,
    SingleCollegueComponentComponent
  ],

  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [CollegueComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
