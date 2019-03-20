import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  password:string="";
  passwordCheck:string="";
  email:string="";
  passwordMismatch=false;

  passwordFocused=false;
  emailFocused=false;

  passwordType="password";
  passwordCheckType="password";


  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }


  onSubmit(f){

    this.router.navigate(['home']);

  }


  comparePassword(r){
    console.log(r);
    if(this.password!=this.passwordCheck){
      this.passwordMismatch=true;
      return;
    }

    this.passwordMismatch=false;
  }

  focusChanged(input){
    if(input.name=="email"){

      this.emailFocused=true;

    }

    else if(input.name=="password"){
      this.passwordFocused=true;
    }
  }

  left(input){
    if(input.name=="email"){

      this.emailFocused=false;

    }

    else if(input.name=="password"){
      this.passwordFocused=false;
    }
  }

  togglepassword(input){

    if(input.name=="password2"){

      this.passwordCheckType=this.passwordCheckType=="text"?"password":"text";

    }

    else if(input.name=="password"){
      this.passwordType=this.passwordType=="text"?"password":"text";
    }

  }
}
