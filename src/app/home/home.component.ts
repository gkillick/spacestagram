import { Component, OnInit } from '@angular/core';
import {NasaPhoto, NasaPhotosService} from "../services/nasa-photos.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public nasaPhotos: NasaPhoto[];
  backgroundColor="red;";
  constructor(private nasaPhotosService: NasaPhotosService) { }

  ngOnInit(): void {
    this.nasaPhotosService.getPhotoByDate().subscribe((photos)=> this.nasaPhotos = photos)

  }

  gridItemStyle(i: number) {
    //based on repeating pattern of 6 photos that will span 9 rows
    //at multiples of 6 we add (i/6)*9 to the columns
    let rowMultiple = 0;
    //calculate row multiple
    if(i > 5){
      rowMultiple = Math.floor((i/6))*9;
    }
    switch (i%6){
      case 0:
        return "grid-column-start: 1;grid-column-end: 3;grid-row-start: "+(1+rowMultiple)+";grid-row-end: "+(3+rowMultiple)+";";
      case 1:
        return "grid-column-start: 3;grid-column-end: 5;grid-row-start: "+(1+rowMultiple)+";grid-row-end: "+(3+rowMultiple)+";";
      case 2:
        return "grid-column-start: 5;grid-column-end: 9;grid-row-start: "+(1+rowMultiple)+";grid-row-end: "+(6+rowMultiple)+";";
      case 3:
        return "grid-column-start: 1;grid-column-end: 5;grid-row-start: "+(3+rowMultiple)+";grid-row-end: "+(6+rowMultiple)+";";
      case 4:
        return "grid-column-start: 1;grid-column-end: 5;grid-row-start: "+(6+rowMultiple)+";grid-row-end: "+(9+rowMultiple)+";";
      case 5:
        return "grid-column-start: 5;grid-column-end: 9;grid-row-start: "+(6+rowMultiple)+";grid-row-end: "+(9+rowMultiple)+";";
      default:
        return "";
    }


  }
}
/*
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 6;
  grid-row-end: 9;
 */
