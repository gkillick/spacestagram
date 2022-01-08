import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {NasaPhoto} from "../../../services/nasa-photos.service";

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.scss']
})
export class LikeButtonComponent implements OnInit {


  @Input() photo: NasaPhoto;
  liked = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  likePhoto(){
    this.liked = !this.liked;
  }

}
