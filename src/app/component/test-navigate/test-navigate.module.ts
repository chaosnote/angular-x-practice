import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestNavigateRoutingModule } from './test-navigate-routing.module';
import { TestNavigateComponent } from './test-navigate.component';

@NgModule({
  imports: [
    CommonModule,
    TestNavigateRoutingModule
  ],
  declarations: [TestNavigateComponent]
})
export class TestNavigateModule { }
