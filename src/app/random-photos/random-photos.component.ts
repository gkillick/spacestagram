import {ChangeDetectorRef, Component, HostListener, OnInit} from '@angular/core';
import {NasaPhoto, NasaPhotosService} from "../services/nasa-photos.service";
import {LayoutService} from "../services/layout.service";
import {LikeService} from "../services/like.service";

@Component({
  selector: 'app-home',
  templateUrl: './random-photos.component.html',
  styleUrls: ['./random-photos.component.scss']
})
export class RandomPhotosComponent implements OnInit {

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    if(pos/max > 0.5 && !this.apiImagesRequested)   {
      this.apiImagesRequested = true;
      this.nasaPhotosService.getRandomPhotos(12, true)
    }
  }

  nasaPhotos = new Array<NasaPhoto>();
  likedPhotos = new Array<NasaPhoto>();
  //store all photos here and just load first 6
  nasaPhotosPreload= new Array<NasaPhoto>();
  gridLayout:boolean;
  requestLoaded=false;
  loadedImages = 0;
  totalImages = 0;
  apiImagesRequested = false;


  constructor(private likeService: LikeService, private nasaPhotosService: NasaPhotosService, private layoutService: LayoutService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.nasaPhotosService.getRandomPhotos(12, false)
    this.layoutService.sharedGridViewState.subscribe((state)=> this.gridLayout = state);
    this.nasaPhotosService.sharedNasaImagesState.subscribe((value) => {
      this.apiImagesRequested = false;
      this.nasaPhotosPreload = value;
      if(this.requestLoaded){
        this.nasaPhotos = value;
      }else{
        this.preloadImages(12)
        this.ref.detectChanges()
      }
    })
    this.likeService.sharedLikedPhotosState.subscribe((value)=> this.likedPhotos = value);



  }

  imageLoaded(){
    this.loadedImages++;
    if(this.loadedImages == this.totalImages){
      this.requestLoaded = true;
      this.nasaPhotos = this.nasaPhotosPreload;
    }

  }

  //adjust urls and preload images
  preloadImages(numberToLoad: number){
    this.adjustURLS()
    //set preloaded images
    this.nasaPhotos = this.nasaPhotosPreload.slice(0,numberToLoad)
    //count photos
    this.totalImages = this.nasaPhotos.filter((image) => {return image.media_type == "image"}).length
  }

  //adjust mislabelled mediaTypes
  adjustURLS(){
    if(this.nasaPhotosPreload.length > 0){
      this.nasaPhotosPreload = this.nasaPhotosPreload.map((image)=>{
        //fix improper labeling of video
        if(image.url){
          if(image.url.includes('youtube') || image.url.includes('vimeo') || image.url.includes('.html')){
            image.media_type = 'video';
          }
        }
        return image;
      })
    }
    this. nasaPhotosPreload = this.nasaPhotosPreload.filter((image) => image.media_type != 'other')
  }

}
