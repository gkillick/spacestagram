import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private gridView = new BehaviorSubject(true);
  sharedGridViewState = this.gridView.asObservable();

  //default dark mode to false
  private darkMode = new BehaviorSubject(false);
  sharedDarkModeState = this.darkMode.asObservable();

  constructor() {
    this.getStoredLayoutInfo();
  }

  ngOnInit(): void{

  }

  setGridViewState(state: boolean){
    this.gridView.next(state)
    if(state){
      localStorage.setItem('layoutMode', 'grid');
    }else{
      localStorage.setItem('layoutMode', 'list');
    }
  }

  setDarkModeState(state: boolean){
    this.darkMode.next(state)
    if(state){
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }else{
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }

  private getStoredLayoutInfo(){
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    const currentLayoutMode = localStorage.getItem('layoutMode') ? localStorage.getItem('layoutMode') : null;
    //get dark mode
    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
      if (currentTheme === 'dark') {
        this.darkMode.next(true)
      }else{
        this.darkMode.next(false)
      }
    }
    //get layout mode
    if (currentLayoutMode) {
      if (currentLayoutMode === 'grid') {
        this.gridView.next(true)
      }else{
        this.gridView.next(false)
      }
    }
  }


}



