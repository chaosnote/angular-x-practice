import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { GetService, PostService } from './ajax.service';
import { GuardService } from './guard.service';

//@see https://github.com/angular/angular/blob/5.2.10/packages/core/src/metadata/ng_module.ts#L12-L21

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: []
})
export class ServiceModule 
{ 
  static forRoot(): ModuleWithProviders
  {
    return {
      ngModule: ServiceModule,
      providers: [
        GetService,
        PostService,
        GuardService
      ]
    };
  }
}
