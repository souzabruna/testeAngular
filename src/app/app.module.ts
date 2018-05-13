import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestTecnicoComponent } from './test-tecnico/test-tecnico.component';

@NgModule({
  declarations: [
    AppComponent,
    TestTecnicoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
