import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-rocket-loader',
  templateUrl: './rocket-loader.component.html',
  styleUrls: ['./rocket-loader.component.scss']
})
export class RocketLoaderComponent implements OnInit {

  isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  constructor() {
  }

  ngOnInit(): void {
  }

}
