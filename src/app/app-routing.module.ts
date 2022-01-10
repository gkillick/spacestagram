import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LikedPhotosComponent} from "./liked-photos/liked-photos.component";
import {FromDateComponent} from "./from-date/from-date.component";

const routes: Routes = [
  { path: '', redirectTo: '/fromdate', pathMatch: 'full' },
  {path: 'random', component: HomeComponent},
  {path: 'fromdate', component: FromDateComponent},
  {path: 'liked', component: LikedPhotosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
