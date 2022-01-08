import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/produtos';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit 
{
  responseProdutos!: Produtos[];

  constructor( private produtosService: ProdutosService ) { }

  ngOnInit(): void 
  {
    this.produtosService.getProdutos().subscribe( res => this.responseProdutos = res )
  }
}