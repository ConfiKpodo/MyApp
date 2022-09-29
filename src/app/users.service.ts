import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
url:string = 'http://localhost:3000/userfile/';
  constructor( private http: HttpClient) {
    
   }
   allUsers(){
    return this.http.get<Users[]>(this.url)
   }

  DelUser(id){
   return this.http.delete<Users[]>(this.url + id)
  }

  public addPerson(users:Users):Observable<any>{
    const headers={'content-type':'application/json'}
    const body=JSON.stringify(users);
    return this.http.post('http://localhost:3000/'+ 'userfile', body,{'headers':headers})
  }

  upDate(user:Users):Observable<any>{
    const headers = {'content-type': 'application/json'}
    const body = JSON.stringify(user);
    return this.http.put(this.url + 'user', body, {'headers':headers})
    
  }
  
}
