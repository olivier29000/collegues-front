import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validators, AbstractControl, Validator, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appUrlValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: UrlValidatorDirective, multi: true}]
})


export class UrlValidatorDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    // TODO écrire la règle de validation
    // En cas de règle respecté (value commence par http), retourner null
    // Sinon retourner l'objet { urlInvalide : true }
    if (control && control.value && control.value.startsWith("http")) {
      return null;
    }else{
      return { urlInvalide : true }
    }
  }
}
