import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ClosuresComponent} from "./closures/closures.component";

const routes: Routes = [
  {path: 'closures', component: ClosuresComponent },
  { path: '**', redirectTo: 'closures', pathMatch: 'full' }, // Default route
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
