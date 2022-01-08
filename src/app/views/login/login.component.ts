import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  loginModel = new Login();

  constructor(  private router: Router, private loginService: LoginService ) { }

  ngOnInit(): void 
  {
    
  }

  mensagem = '';

  mensagem2 = '';

  onSubmit()
  {
    const listaPalavras: string[] = 
    [ 
      'select ', 'from ', 'drop ', 'or ', 'having ', 'group ', 'by ',
       'insert ', 'exec ', '\'', '\"', '--', '#', '*', ';' 
    ]

    this.loginService.login( this.loginModel ).subscribe( ( response ) => 
    {
      this.mensagem = 'Login com sucesso!'

      this.mensagem2 = 'Logado!'
    }, ( error ) => 
    {
      this.mensagem = error.error;
    } )

    listaPalavras.forEach( palavra => 
      {
        if( this.loginModel.email?.toLowerCase().includes( palavra ) )
        {
          this.mensagem2 = 'Dados inválidos: ' + palavra

          return;
        }
      } )
  }
}