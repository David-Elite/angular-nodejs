import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login = {
  email :'',
  password : ''
};
  constructor( private auth : AuthServiceService) { }

  ngOnInit(): void {
  }
  loginData(){
    
    this.auth.loginUser(this.login);
    console.log(this.login);
  }

}
