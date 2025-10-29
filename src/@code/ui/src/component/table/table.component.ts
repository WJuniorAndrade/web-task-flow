import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'code-ui-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class CodeUiTableComponent implements OnInit,OnChanges {

  @Input() tableData!: any;

  public tableKeys: string[] = [];


  ngOnInit(): void {
  }

 ngOnChanges(changes: SimpleChanges): void {
    // if (changes['tableData'] && this.tableData) {
    //   this.setTableKeys(this.tableData);
    // }
  } 
}
