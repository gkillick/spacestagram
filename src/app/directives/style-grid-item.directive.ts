import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appStyleGridItem]'
})
export class StyleGridItemDirective {

  @Input()index: number;

  constructor(private host: ElementRef) { }

  ngAfterViewInit(){

      this.host.nativeElement.style=this.gridItemStyle(this.index)
      this.host.nativeElement.setAttribute("data-row-multiple", this.getRowMultiple(this.index));



  }
  getRowMultiple(i: number){
    let rowMultiple;
    //calculate row multiple
    rowMultiple = (Math.floor(((i)/6))*9)- Math.floor(i/6);

    return rowMultiple
  }
  gridItemStyle(i: number) {
    //based on repeating pattern of 6 photos that will span 9 rows
    //at multiples of 6 we add (i/6) rounded down * 9 to the columns
    let rowMultiple = this.getRowMultiple(i);
    //calculate row multiple


    switch (i%6){
      case 0:
        return "grid-column-start: 1;grid-column-end: 3;grid-row-start: "+(1+rowMultiple)+";grid-row-end: "+(3+rowMultiple)+";";
      case 1:
        return "grid-column-start: 3;grid-column-end: 5;grid-row-start: "+(1+rowMultiple)+";grid-row-end: "+(3+rowMultiple)+";";
      case 2:
        return "grid-column-start: 5;grid-column-end: 9;grid-row-start: "+(1+rowMultiple)+";grid-row-end: "+(6+rowMultiple)+";";
      case 3:
        return "grid-column-start: 1;grid-column-end: 5;grid-row-start: "+(3+rowMultiple)+";grid-row-end: "+(6+rowMultiple)+";";
      case 4:
        return "grid-column-start: 1;grid-column-end: 5;grid-row-start: "+(6+rowMultiple)+";grid-row-end: "+(9+rowMultiple)+";";
      case 5:
        return "grid-column-start: 5;grid-column-end: 9;grid-row-start: "+(6+rowMultiple)+";grid-row-end: "+(9+rowMultiple)+";";
      default:
        return "";
    }


  }


}
