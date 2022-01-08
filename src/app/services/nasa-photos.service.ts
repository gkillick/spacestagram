import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NasaPhotosService {

  nasaAPIKey = "huBNKVBd9jSB5MbkhEBTbpl5gshke58w7PUAWYss"


  constructor(private http: HttpClient) { }

  getPhotoByDate(): Observable<NasaPhoto[]>{
    const url = 'https://api.nasa.gov/planetary/apod?api_key=' + this.nasaAPIKey + '&count=' + 12;
    return this.http.get<NasaPhoto[]>(url)
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

