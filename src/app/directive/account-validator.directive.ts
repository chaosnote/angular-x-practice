import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

//@see https://github.com/angular/angular/blob/5.2.9/packages/forms/src/directives/validators.ts#L21-L39

@Directive({
  selector: 'input[account]',
  providers: [{ provide: NG_VALIDATORS, useExisting: AccountValidatorDirective, multi: true }]
})
export class AccountValidatorDirective implements Validator
{

  validate(input: AbstractControl): ValidationErrors
  {
    let error: boolean = !(/^[0-9a-zA-Z]{4,10}$/.test(input.value));
    return error ? {
      "account": true
    } : null;
  }
}