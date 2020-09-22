import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularDirectivesComponent } from './angular-directives/angular-directives.component';
import { PipesDirectivesComponent } from './pipes-directives/pipes-directives.component';
import { ToSquarePipe } from './to-square.pipe';
import { HideEvenNumDirective } from './hide-even-num.directive';

@NgModule({
  declarations: [
    AppComponent,
    AngularDirectivesComponent,
    PipesDirectivesComponent,
    ToSquarePipe,
    HideEvenNumDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
