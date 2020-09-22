import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AngularDirectivesComponent } from './angular-directives/angular-directives.component';
import { PipesDirectivesComponent } from './pipes-directives/pipes-directives.component';
import { ToSquarePipe } from './to-square.pipe';
import { HideEvenNumDirective } from './hide-even-num.directive';
import { InputOutputComponent } from './input-output/input-output.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularDirectivesComponent,
    PipesDirectivesComponent,
    ToSquarePipe,
    HideEvenNumDirective,
    InputOutputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
