import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NasaPhoto} from "../../services/nasa-photos.service";
import {DomSanitizer, SafeResourceUrl, SafeUrl} from "@angular/platform-browser";
import {LayoutService} from "../../services/layout.service";
import {MatDialog} from "@angular/material/dialog";
import {PhotoDetailComponent} from "./photo-detail/photo-detail.component";

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss']
})
export class PhotoCardComponent implements OnInit {

  @Output()
  imageLoadedEmitter = new EventEmitter();

  @Input() photo: NasaPhoto;
  gridLayout: boolean;

  constructor(public dialog: MatDialog, private _sanitizer: DomSanitizer, private layoutService: LayoutService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.layoutService.sharedGridViewState.subscribe((state) => {
      this.gridLayout = state;
      this.ref.detectChanges();
    });
    this.ref.detectChanges();
  }


  ngOnChanges(): void{
    this.ref.detectChanges()
  }

  sanitizeUrl(url: string){
    return  this._sanitizer.bypassSecurityTrustResourceUrl(url.replace("watch?v=", "v/"));
  }

  openPhotoDetail(event: MouseEvent) {
    //make sure like button not clicked
    if(!((event.target as HTMLElement).classList.contains('mat-icon'))) {
      this.dialog.open(PhotoDetailComponent, {
        panelClass: 'full-screen-modal',
        autoFocus: false,
        data: {
          photo: this.photo,
        }
      })
    }
  }

  imageLoaded(){
    this.imageLoadedEmitter.emit();
  }
}
