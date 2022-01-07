import {Component, Input, OnInit} from '@angular/core';
import {NasaPhoto} from "../../services/nasa-photos.service";
import {DomSanitizer, SafeResourceUrl, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss']
})
export class PhotoCardComponent implements OnInit {

  @Input() photo: NasaPhoto;
  safeYoutubeURL: SafeResourceUrl;

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.safeYoutubeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.photo.url);
  }

}
