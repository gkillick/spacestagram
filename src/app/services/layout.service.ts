import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private gridView = new BehaviorSubject(true);
  sharedGridViewState = this.gridView.asObservable();

  //default dark mode to false
  private darkMode = new BehaviorSubject(true);
  sharedDarkModeState = this.darkMode.asObservable();

  constructor() {
    this.getStoredDarkMode();
  }

  ngOnInit(): void{

  }

  setGridViewState(state: boolean){
    this.gridView.next(state)
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

  private getStoredDarkMode(){
    console.log("getting state")
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
      if (currentTheme === 'dark') {
        this.darkMode.next(true)
      }else{
        this.darkMode.next(false)
      }
    }

  }


}



