import { Component, OnInit } from '@angular/core';
import { RequestCreate, ResponseCreate } from 'src/app/models/user';
import { RequestCreate2, ResponseCreate2 } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit 
{
  request: RequestCreate = 
  {
    name: '',
    sobrenome: '',
    idade: '',
    estadocivil: '',
    celular: '',
    vaga: '',
    email: ''
  }

  request2: RequestCreate2 = 
  {
    email: '',
    password: ''
  }

  response!: ResponseCreate
  response2!: ResponseCreate2


  constructor( private usersService: UsersService ) { }

  ngOnInit(): void {}

  save()
  {
    this.usersService.createUser( this.request ).subscribe( res => 
      {
        this.response = res;
      })
  }

  save2()
  {
    this.usersService.createUsers( this.request2 ).subscribe( res => 
      {
        this.response2 = res;
      })
  }
}
