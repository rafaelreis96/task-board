import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-descartar',
  templateUrl: './button-descartar.component.html',
  styleUrls: ['./button-descartar.component.scss']
})
export class ButtonDescartarComponent implements OnInit {
  @Input() titulo = "Descartar";

  constructor() { }

  ngOnInit(): void {
  }

}
