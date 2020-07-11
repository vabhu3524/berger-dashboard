import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  responseMsg:any="";
  constructor(private fb: FormBuilder,private router: Router,private loginService:LoginService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['',[ Validators.required,Validators.minLength(5)]]
    });
  }
  login(){
   
    if(this.loginForm.controls["username"].value=="admin" && this.loginForm.controls["password"].value=="admin@321"){
      this.responseMsg="";
      this.loginService.isValidLogin=true;
      this.router.navigate(['/user-data']);
    }else
    {
      this.responseMsg="Incorrect User Name or Password";
    }
     
    
  }
}
