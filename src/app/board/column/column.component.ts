import { Column } from './column.model';
import { Note } from './../note/note.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  @Input()
  column!: Column;

  constructor() { }

  ngOnInit(): void {
  }

}
