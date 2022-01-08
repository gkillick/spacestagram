import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {NasaPhoto} from "../../services/nasa-photos.service";
import {DomSanitizer, SafeResourceUrl, SafeUrl} from "@angular/platform-browser";
import {LayoutService} from "../../services/layout.service";

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss']
})
export class PhotoCardComponent implements OnInit {

  @Input() photo: NasaPhoto;
  safeYoutubeURL: SafeResourceUrl;
  gridLayout: boolean;
  liked = false

  constructor(private _sanitizer: DomSanitizer, private layoutService: LayoutService,private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.safeYoutubeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.photo.url);
    this.layoutService.sharedGridViewState.subscribe((state) => this.gridLayout = state);
  }

  likePhotoClick() {
    this.liked = !this.liked
    this.ref.detectChanges()
  }
}
