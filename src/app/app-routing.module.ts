import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RandomPhotosComponent} from "./random-photos/random-photos.component";
import {LikedPhotosComponent} from "./liked-photos/liked-photos.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: '', redirectTo: '/fromdate', pathMatch: 'full' },
  {path: 'random', component: RandomPhotosComponent},
  {path: 'fromdate', component: HomeComponent},
  {path: 'liked', component: LikedPhotosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
