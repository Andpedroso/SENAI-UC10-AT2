import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestUpdate } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit 
{
  id!: any
  request!: RequestUpdate

  constructor( private usersService: UsersService, private route: ActivatedRoute, private _route: Router ) { }

  ngOnInit(): void 
  {
    this.id = this.route.snapshot.paramMap.get( 'id' );

    this.usersService.getUser( this.id ).subscribe( res => 
      {
        this.request = 
        {
          name: ``,
          sobrenome: ``,
          idade: '',
          estadocivil: '',
          celular: '',
          vaga: '',
          email: ``
        }
      } )
  }

  atualizar()
  {
    this.usersService.updateUser( this.id, this.request ).subscribe( res => 
      {
        alert(`Nome: ${res.name}, Sobrenome: ${res.sobrenome}, E-mail: ${res.email}`);
        this._route.navigate(['usuarios']);
      } );
  }

  cancelar()
  {
    this._route.navigate(['usuarios']);
  }
}
