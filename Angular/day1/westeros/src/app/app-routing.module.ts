import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DorneComponent } from './dorne/dorne.component';
import { NorthComponent } from './north/north.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "dorne", component: DorneComponent},
  {path: "north", component: NorthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
