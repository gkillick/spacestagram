import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatIconModule} from "@angular/material/icon";
import { PhotoCardComponent } from './home/photo-card/photo-card.component';
import { StyleGridItemDirective } from './directives/style-grid-item.directive';
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import { PhotoDetailComponent } from './home/photo-card/photo-detail/photo-detail.component';
import {MatDialogModule} from "@angular/material/dialog";
import { LikeButtonComponent } from './home/photo-card/like-button/like-button.component';
import { HoverClassDirective } from './directives/hover-class.directive';
import { RocketLoaderComponent } from './home/rocket-loader/rocket-loader.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import { LikedPhotosComponent } from './liked-photos/liked-photos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PhotoCardComponent,
    StyleGridItemDirective,
    PhotoDetailComponent,
    LikeButtonComponent,
    HoverClassDirective,
    RocketLoaderComponent,
    LikedPhotosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
