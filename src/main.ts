import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

export {};
declare global {
    interface Number {
        mm(): number;
    }
}
Number.prototype.mm = function () {
    return this/1000 ;
}
console.log(1..mm()) ;


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));