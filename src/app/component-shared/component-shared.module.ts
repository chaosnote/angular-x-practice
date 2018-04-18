import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleButtonComponent } from './simple-button/simple-button.component';

const shared = [
  SimpleButtonComponent
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: shared,
  exports : shared
})
export class ComponentSharedModule { }
