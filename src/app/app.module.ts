import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExempleComponent } from './exemple/exemple.component';
import { PageTemplateModule } from './page-template/page-template.module';


@NgModule({
  declarations: [
    AppComponent,
    ExempleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
