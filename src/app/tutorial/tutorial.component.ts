import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface Secao {
  titulo: string,
  route: any[]
}

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {
  secao!: string;
  secoes!: Secao[];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.secao = this.route.snapshot.paramMap.get('secao') || "";
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    this.secoes = [
      {titulo: "Início",  route: ["/tutorial", {secao:"inicio" }]},
      {titulo: "Notas",   route: ["/tutorial", {secao:"nota" }]},
      {titulo: "Colunas", route: ["/tutorial", {secao:"coluna" }]}
    ]
  }

}
