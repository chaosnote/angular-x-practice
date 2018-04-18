import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestSharedRoutingModule } from './test-shared-routing.module';
import { TestSharedComponent } from './test-shared.component';
import { ComponentSharedModule } from '../../component-shared/component-shared.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentSharedModule,
    TestSharedRoutingModule
  ],
  declarations: [TestSharedComponent]
})
export class TestSharedModule { }
