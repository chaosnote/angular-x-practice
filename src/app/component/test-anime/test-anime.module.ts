import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestAnimeRoutingModule } from './test-anime-routing.module';
import { TestAnimeComponent } from './test-anime.component';

@NgModule({
  imports: [
    CommonModule,
    TestAnimeRoutingModule
  ],
  declarations: [TestAnimeComponent]
})
export class TestAnimeModule { }
