import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestDirectRoutingModule } from './test-direct-routing.module';
import { TestDirectComponent } from './test-direct.component';

@NgModule({
  imports: [
    CommonModule,
    TestDirectRoutingModule
  ],
  declarations: [TestDirectComponent]
})
export class TestDirectModule { }
