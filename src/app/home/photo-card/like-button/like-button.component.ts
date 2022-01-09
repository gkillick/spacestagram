import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {NasaPhoto} from "../../../services/nasa-photos.service";
import {LikeService} from "../../../services/like.service";

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.scss']
})
export class LikeButtonComponent implements OnInit {


  @Input() photo: NasaPhoto;
  liked = false;

  constructor(private likeService: LikeService, private ref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.likeService.likedPhotos.subscribe((value)=>{
      this.liked = this.likeService.isLiked(this.photo);
      this.ref.detectChanges()
    })
    this.liked = this.likeService.isLiked(this.photo)
  }

  likePhoto(){
    this.likeService.likePhoto(this.photo)
    this.liked = this.likeService.isLiked(this.photo);
    this.ref.detectChanges()
  }

}
