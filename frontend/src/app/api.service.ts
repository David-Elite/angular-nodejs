import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
message: any ;
  constructor(private http: HttpClient ) { }
  getData(){
    this.http.get('http://localhost:1220/post/').subscribe(res =>{
      console.log(res);
      this.message = res.Json();
    })
  }
}
