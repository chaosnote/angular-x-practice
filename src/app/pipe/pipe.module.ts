import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PadLeftPipe } from './pad-left.pipe';

const pipes = [
  PadLeftPipe
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: pipes,
  exports : pipes
})
export class PipeModule { }
