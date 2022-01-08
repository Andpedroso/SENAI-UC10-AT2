import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestCreate, RequestUpdate, ResponseCreate, ResponseUpdate, ResponseUser, User } from '../models/user';
import { RequestCreate2, ResponseCreate2 } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService 
{
  private url = 'http://localhost:3000/user';

  private url2 = 'http://localhost:3000/users';

  constructor( private http: HttpClient ) { }

  createUser( request: RequestCreate ): Observable< ResponseCreate >
  {
    return this.http.post< ResponseCreate >( this.url, request );
  }

  createUsers( request2: RequestCreate2 ): Observable< ResponseCreate2 >
  {
    return this.http.post< ResponseCreate2 >( this.url2, request2 );
  }

  getUsers(): Observable< User[] >
  {
    return this.http.get< User[] >( this.url )
  }

  getUser( id: string ): Observable< ResponseUser >
  {
    const _url = `${this.url}/${id}`;

    return this.http.get< ResponseUser >( _url );
  }

  updateUser( id: string, request: RequestUpdate ): Observable< ResponseUpdate >
  {
    const _url = `${this.url}/${id}`;

    return this.http.put< ResponseUpdate >( _url, request );
  }

  deleteUser( id: string ): Observable< any >
  {
    const _url = `${this.url}/${id}`;

    return this.http.delete< any >( _url );
  }
}
