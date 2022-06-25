import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-adicionar',
  templateUrl: './button-adicionar.component.html',
  styleUrls: ['./button-adicionar.component.scss']
})
export class ButtonAdicionarComponent implements OnInit {
  @Input() titulo = "Adicionar";

  constructor() { }

  ngOnInit(): void {
  }

}
