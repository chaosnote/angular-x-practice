import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestAnimeComponent } from './test-anime.component';

const routes: Routes = [
  {
    path: "",
    component : TestAnimeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestAnimeRoutingModule { }
