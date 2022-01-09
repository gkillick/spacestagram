import {ChangeDetectorRef, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {newArray} from "@angular/compiler/src/util";
import {formatDate} from "@angular/common";
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class NasaPhotosService {

  nasaAPIKey = "huBNKVBd9jSB5MbkhEBTbpl5gshke58w7PUAWYss"

  private randomPhotos = new BehaviorSubject(new Array<NasaPhoto>());
  sharedNasaImagesState = this.randomPhotos.asObservable();

  private photosFromDate = new BehaviorSubject(new Array<NasaPhoto>());
  sharedPhotosFromDate = this.photosFromDate.asObservable();

  private photosLoading = new BehaviorSubject(false);
  sharedPhotosLoadingState = this.photosLoading.asObservable();


  constructor(private http: HttpClient) {

  }

  getRandomPhotos(count: number){
    const url = 'https://api.nasa.gov/planetary/apod?api_key=' + this.nasaAPIKey + '&count=' + count;
    this.http.get<NasaPhoto[]>(url).subscribe((value) => {
      let imagesToAdd = this.randomPhotos.value;
      value.map((image)=> {imagesToAdd.push(image)})
      this.randomPhotos.next(imagesToAdd)
    })
  };

  getPhotosFromDate(endDate: Date, days: number, append: boolean){
    let endDateMoment = moment(endDate)
    let startDateMoment = moment(endDateMoment);
    startDateMoment.subtract(days, 'days')

    const url = 'https://api.nasa.gov/planetary/apod?api_key=' + this.nasaAPIKey + '&start_date='+startDateMoment.format('Y-MM-DD')+'&end_date='+endDateMoment.format('Y-MM-DD');
    this.http.get<NasaPhoto[]>(url).subscribe((value)=>{
      value = value.reverse();
      let imagesToAdd = this.photosFromDate.value;
      if(append) {
        value.map((image) => {
          imagesToAdd.push(image)
        })
      }else{
        imagesToAdd = value;
      }
      this.photosFromDate.next(imagesToAdd)
      this.setPhotosLoadingState(false);
    })
  }

  setPhotosLoadingState(state: boolean){
    this.photosLoading.next(state);
  }

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

