import { Injectable } from '@angular/core';
import {NasaPhoto} from "./nasa-photos.service";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  likedPhotos = new BehaviorSubject(new Array<NasaPhoto>());
  sharedLikedPhotosState = this.likedPhotos.asObservable();

  constructor() {
    const storedPhotos = localStorage.getItem('likedPhotos') ? localStorage.getItem('likedPhotos') : null;
    if(storedPhotos){this.likedPhotos.next(JSON.parse(storedPhotos))}
  }

  likePhoto(photo: NasaPhoto){
    let photos = this.likedPhotos.value
    //unlike or like
    if(this.isLiked(photo)){
      photos = photos.filter((likedPhoto) => likedPhoto.date != photo.date);
    }else{
      photos.push(photo)
    }
    this.likedPhotos.next(photos);
    localStorage.setItem('likedPhotos', JSON.stringify(this.likedPhotos.value));
  }

  isLiked(photo: NasaPhoto):boolean{
    return this.likedPhotos.value.some(likedPhoto => photo.date === likedPhoto.date)

  }
}
