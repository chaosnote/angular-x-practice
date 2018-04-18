import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardService } from './service/guard.service';

const routes: Routes = [
  {
    path: "",
    redirectTo: "welcome",
    pathMatch: "full"
  },
  {
    path: "welcome",
    loadChildren: "./component/welcome/welcome.module#WelcomeModule"
  },
  {
    path: "test-direct",
    loadChildren: "./component/test-direct/test-direct.module#TestDirectModule"
  },
  {
    path: "test-pipe",
    loadChildren: "./component/test-pipe/test-pipe.module#TestPipeModule"
  },
  {
    path: "test-service",
    loadChildren: "./component/test-service/test-service.module#TestServiceModule"
  },
  {
    path: "test-navigate",
    loadChildren: "./component/test-navigate/test-navigate.module#TestNavigateModule"
  },
  {
    path: "test-navigate/time/:time",
    canActivate : [GuardService], 
    loadChildren: "./component/test-navigate/test-navigate.module#TestNavigateModule"
  },
  {
    path: "test-shared",
    loadChildren: "./component/test-shared/test-shared.module#TestSharedModule"
  },
  {
    path: "test-anime",
    loadChildren: "./component/test-anime/test-anime.module#TestAnimeModule"
  },
];

//@see https://angular.io/tutorial/toh-pt5#add-routes

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // 註冊根節點
  exports: [RouterModule]
})
export class AppRoutingModule { }