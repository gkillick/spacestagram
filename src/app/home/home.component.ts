import { Component, OnInit } from '@angular/core';
import {NasaPhoto, NasaPhotosService} from "../services/nasa-photos.service";
import {LayoutService} from "../services/layout.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public nasaPhotos: NasaPhoto[];
  gridLayout:boolean;
  requestLoaded=false;

  constructor(private nasaPhotosService: NasaPhotosService, private layoutService: LayoutService) { }

  ngOnInit(): void {
    this.layoutService.sharedGridViewState.subscribe((state)=> this.gridLayout = state);
  }
  ngAfterViewInit():void {
    this.nasaPhotosService.getPhotoByDate().subscribe((photos)=> {
      this.nasaPhotos = photos
      this.requestLoaded = true;
    });
  }

}
