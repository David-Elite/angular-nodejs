import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
register = {
  email : '',
  password : ''
}
  constructor( private  auth : AuthServiceService) { }

  ngOnInit(): void {
  }
  SubmitData(){
    console.log(this.register);
    this.auth.registerData(this.register);
  
  }

}
