import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AsideLeftComponent } from './aside-left/aside-left.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    MainComponent,
    AsideLeftComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent,
    AsideLeftComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class PageTemplateModule { }
