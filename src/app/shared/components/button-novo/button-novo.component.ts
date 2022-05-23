import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-novo',
  templateUrl: './button-novo.component.html',
  styleUrls: ['./button-novo.component.scss']
})
export class ButtonNovoComponent implements OnInit {
  @Input()
  disabled = false;

  constructor() { }

  ngOnInit(): void {
  }

}
