import {Component, Input, OnInit} from '@angular/core';
import {NasaPhoto} from "../../services/nasa-photos.service";

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss']
})
export class PhotoCardComponent implements OnInit {

  @Input() photo: NasaPhoto;

  constructor() { }

  ngOnInit(): void {
  }

}
