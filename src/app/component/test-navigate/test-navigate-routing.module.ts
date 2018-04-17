import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestNavigateComponent } from './test-navigate.component';

const routes: Routes = [
  {
    path: "",
    component : TestNavigateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestNavigateRoutingModule { }
