import { Component, OnInit } from '@angular/core';
import {LayoutService} from "../services/layout.service";
import {Router} from "@angular/router";
import {NasaPhotosService} from "../services/nasa-photos.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  darkMode = false;
  gridLayout:boolean;
  today = new Date();

  constructor(private layoutService: LayoutService, public router: Router, private nasaPhotoService: NasaPhotosService) { }

  ngOnInit(): void {
    this.layoutService.sharedGridViewState.subscribe((state)=> this.gridLayout = state);
    this.layoutService.sharedDarkModeState.subscribe((state)=> this.darkMode = state)
  }

  toggleDarkMode() {
    this.layoutService.setDarkModeState(!this.darkMode);
  }

  displayGridView() {
    this.layoutService.setGridViewState(true);
  }
  displayListView() {
    this.layoutService.setGridViewState(false);
  }


  checkClick($event: MouseEvent) {
    if(this.router.url == '/fromdate'){
      $event.stopPropagation();
      $event.preventDefault();
    }

  }

  requestDate(value: string) {
    const date = new Date(value)
    this.nasaPhotoService.setPhotosLoadingState(true);
    this.nasaPhotoService.getPhotosFromDate(date,9, false)

  }
}
