import {ChangeDetectorRef, Component, HostListener, OnInit} from '@angular/core';
import {NasaPhoto, NasaPhotosService} from "../services/nasa-photos.service";
import {LayoutService} from "../services/layout.service";

@Component({
  selector: 'app-from-date',
  templateUrl: './from-date.component.html',
  styleUrls: ['./from-date.component.scss']
})
export class FromDateComponent implements OnInit {

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    if(pos/max > 0.5 && !this.apiImagesRequested)   {
      this.apiImagesRequested = true;
      this.nasaPhotosService.getPhotosFromDate(this.date, 11, true)
    }
  }
  apiImagesRequested = false;
  photosFromDate = new Array<NasaPhoto>();
  requestLoaded = false;
  gridLayout: boolean;
  date = new Date();

  constructor(private nasaPhotosService: NasaPhotosService, private layoutService: LayoutService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.nasaPhotosService.getPhotosFromDate(new Date(), 11, false);
    this.nasaPhotosService.sharedPhotosLoadingState.subscribe((state)=> {
      this.requestLoaded = !state
      if(!this.requestLoaded){
        this.photosFromDate = new Array<NasaPhoto>();
      }
    });
    this.nasaPhotosService.sharedPhotosFromDate.subscribe((value)=> {
      this.photosFromDate = value;
      if(this.photosFromDate.length == 0){
        this.requestLoaded = false;
      }else{
        //adjust date to last date requested
        this.date = new Date(this.photosFromDate.slice(-1)[0].date);
        this.apiImagesRequested = false;
      }
    })
    this.layoutService.sharedGridViewState.subscribe((value) => this.gridLayout = value);
  }

  imageLoaded() {

  }

}
