import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestPipeComponent } from './test-pipe.component';

const routes: Routes = [
  {
    path: "",
    component : TestPipeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestPipeRoutingModule { }
