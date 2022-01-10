import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {LikeService} from "../services/like.service";
import {NasaPhoto} from "../services/nasa-photos.service";
import {LayoutService} from "../services/layout.service";

@Component({
  selector: 'app-liked-photos',
  templateUrl: './liked-photos.component.html',
  styleUrls: ['./liked-photos.component.scss']
})
export class LikedPhotosComponent implements OnInit {

  likedPhotos = new Array<NasaPhoto>();
  requestLoaded = true;
  gridLayout: boolean;

  constructor(private likeService: LikeService, private layoutService: LayoutService, private ref: ChangeDetectorRef) {
    this.likeService.likedPhotos.subscribe((value)=> {
      this.likedPhotos = new Array<NasaPhoto>();
      this.likedPhotos = value.reverse()
    })
    this.layoutService.sharedGridViewState.subscribe((value) => this.gridLayout = value);
  }

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  imageLoaded() {

  }
}
