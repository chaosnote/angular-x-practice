import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "welcome",
    pathMatch: "full"
  },
  {
    path : "welcome",
    loadChildren : "./component/welcome/welcome.module#WelcomeModule"
  },
  {
    path : "test-direct",
    loadChildren : "./component/test-direct/test-direct.module#TestDirectModule"
  },
];

//@see https://angular.io/tutorial/toh-pt5#add-routes

@NgModule({
  imports: [RouterModule.forRoot(routes)], // 註冊根節點
  exports: [RouterModule]
})
export class AppRoutingModule { }
