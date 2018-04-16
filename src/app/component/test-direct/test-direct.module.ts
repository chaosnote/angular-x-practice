import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestDirectRoutingModule } from './test-direct-routing.module';
import { TestDirectComponent } from './test-direct.component';
import { FormsModule } from '@angular/forms';
import { DirectiveModule } from '../../directive/directive.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, // 細節
    DirectiveModule,
    TestDirectRoutingModule
  ],
  declarations: [TestDirectComponent]
})
export class TestDirectModule { }
