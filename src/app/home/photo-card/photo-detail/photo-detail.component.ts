import {Component, Inject, Input, OnInit} from '@angular/core';
import {NasaPhoto} from "../../../services/nasa-photos.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss']
})
export class PhotoDetailComponent implements OnInit {

  photo: NasaPhoto;


  constructor(@Inject(MAT_DIALOG_DATA) public data: {photo:NasaPhoto}, public dialogRef: MatDialogRef<PhotoDetailComponent>) { }

  ngOnInit(): void {
    this.photo = this.data.photo;
  }

  downloadPhoto(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', this.photo.hdurl);
    link.setAttribute('download', `products.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
