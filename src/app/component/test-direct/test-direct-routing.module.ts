import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestDirectComponent } from './test-direct.component';

const routes: Routes = [
  {
    path: "",
    component : TestDirectComponent
  }, // 預設進入頁
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // 加入子節點
  exports: [RouterModule]
})
export class TestDirectRoutingModule { }
