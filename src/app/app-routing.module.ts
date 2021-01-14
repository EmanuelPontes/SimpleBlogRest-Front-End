import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExempleComponent } from './exemple/exemple.component';
import { MainComponent } from './page-template/main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'exemplo', component: ExempleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
