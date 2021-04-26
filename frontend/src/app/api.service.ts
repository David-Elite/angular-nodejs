import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
message: any ;
users : any ;
  constructor(private http: HttpClient ) { }
  getDataApi(){
    this.http.get('http://localhost:1220/post').subscribe(res =>{
      console.log(res);
      this.message = res;
    });
  }
  getUsers(){
    this.http.get('http://localhost:1220/users').subscribe(res =>{
      console.log(res);
      this.users = res;
      console.log(this.users);
    });
  }

}