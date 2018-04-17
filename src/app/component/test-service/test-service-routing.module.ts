import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestServiceComponent } from './test-service.component';

const routes: Routes = [
  {
    path: "",
    component : TestServiceComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestServiceRoutingModule { }
