import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestPipeRoutingModule } from './test-pipe-routing.module';
import { TestPipeComponent } from './test-pipe.component';
import { PipeModule } from '../../pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    TestPipeRoutingModule
  ],
  declarations: [TestPipeComponent]
})
export class TestPipeModule { }
