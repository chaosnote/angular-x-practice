import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestSharedComponent } from './test-shared.component';

const routes: Routes = [
  {
    path: "",
    component : TestSharedComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestSharedRoutingModule { }
