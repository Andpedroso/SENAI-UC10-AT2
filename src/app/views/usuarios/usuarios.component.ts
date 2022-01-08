import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit 
{
  responseUsers!: User[]

  constructor( private userService: UsersService ) { }

  ngOnInit(): void 
  {
    this.userService.getUsers().subscribe( res => this.responseUsers = res )
  }
}
