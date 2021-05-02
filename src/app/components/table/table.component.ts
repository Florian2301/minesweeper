import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
 

})
export class TableComponent {
  rows: number[] = [];
  cols: number[] = [];

  @Input() row!: number;
  @Input() col!: number;

  rowTable(row: number) {
    this.rows = []
    for (let i = 1; i <=row; i++) {
      this.rows.push(i)
    }
    //this.color()
    return this.rows
  }

  colTable(col: number) {
    this.cols = []
    for (let i = 1; i <=col; i++) {
      this.cols.push(i)
    } 
    //this.color()
    return this.cols
  }

  /*
  color() {
    for (let i = 1; i <= this.rows.length; i++) {

        for (let j = 1; j <= this.cols.length; i++) {
      
        }
    }
  }*/

}
