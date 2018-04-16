import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountValidatorDirective } from './account-validator.directive';

const directives = [
  AccountValidatorDirective
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: directives,
  exports: directives
})
export class DirectiveModule { }
