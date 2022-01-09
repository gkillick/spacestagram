import {ChangeDetectorRef, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NasaPhotosService {

  nasaAPIKey = "huBNKVBd9jSB5MbkhEBTbpl5gshke58w7PUAWYss"

  private nasaImages = new BehaviorSubject(new Array<NasaPhoto>());
  sharedNasaImagesState = this.nasaImages.asObservable();


  constructor(private http: HttpClient) {
    this.getRandomPhotos(10);
  }

  getRandomPhotos(count: number){
    const url = 'https://api.nasa.gov/planetary/apod?api_key=' + this.nasaAPIKey + '&count=' + count;
    this.http.get<NasaPhoto[]>(url).subscribe((value) => {
      let imagesToAdd = this.nasaImages.value;
      value.map((image)=> {imagesToAdd.push(image)})
      this.nasaImages.next(imagesToAdd)
    })
  };

}

export interface NasaPhoto {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

