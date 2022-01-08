import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  constructor( private route: ActivatedRoute, private _route: Router ) { }

  ngOnInit(): void 
  {
  }

  comprar()
  {
    alert( "Comprado com sucesso!" );
    this._route.navigate(['']);
  }

  cancelar()
  {
    this._route.navigate(['']);
  }
}
