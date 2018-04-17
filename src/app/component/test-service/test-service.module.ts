import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestServiceRoutingModule } from './test-service-routing.module';
import { TestServiceComponent } from './test-service.component';

@NgModule({
  imports: [
    CommonModule,
    TestServiceRoutingModule
  ],
  declarations: [TestServiceComponent]
})
export class TestServiceModule { }
