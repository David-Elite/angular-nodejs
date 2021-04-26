import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http : HttpClient) { }

   token : any;
  registerData(registerApi) {
    this.http.post('http://localhost:1220/register',registerApi).subscribe(res => {
      console.log(res);
    })
  }
  loginUser(login){
    this.http.post('http://localhost:1220/login', login).subscribe(res=>{
      console.log(res);
      this.token = res;
      localStorage.setItem('token', this.token.token);
    })
  }
}


