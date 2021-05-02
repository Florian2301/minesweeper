import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})

export class SelectComponent implements OnInit {
  rows: number[] = [];
  cols: number[] = [];

  @Output() rowClicked = new EventEmitter<number>();
  @Output() colClicked = new EventEmitter<number>();


  ngOnInit(): void {
    for (let i = 0; i <=10; i++) {
      this.rows.push(i)
    }
    
    for (let i = 0; i <=10; i++) {
      this.cols.push(i)
    }
  }

  onClickRow(row:number) {
    this.rowClicked.emit(row)
  }

  onClickCol(col:number) {
    this.colClicked.emit(col)
  }

  

}
