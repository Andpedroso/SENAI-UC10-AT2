import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit 
{
  id!: any;

  constructor( private usersService: UsersService, private route: ActivatedRoute, private _route: Router ) { }

  ngOnInit(): void 
  {
    this.id = this.route.snapshot.paramMap.get( 'id' );
  }

  delete()
  {
    this.usersService.deleteUser( this.id ).subscribe( res => 
      {
        alert( "Removido com sucesso!" );
        this._route.navigate(['usuarios']);
      } )
  }

  cancelar()
  {
    this._route.navigate(['usuarios']);
  }
}
