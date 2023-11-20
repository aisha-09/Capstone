import { Component } from '@angular/core';
import { User } from '../user';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // onSubmit(){
  //   if((this.user.password!='' && this.user.email!='')&&(this.user.email!=null &&this.user.password!=null))
  //   {
  //     //token generation
  //     this.loginService.createUser(this.user).subscribe(
  //       (response:any)=>{
  //         //if token is generated successfull
  //         console.log(response.token)
  //         this.loginService.loginUser(response.token)
  //         window.location.href="/dashboard"

  //       },
  //       error=>{
  //         //if error
  //         console.log(error)

  //       }
  //     )
  //   }
  //   else
  //   {
  //     console.log("Credentials empty")
  //   }
  // }

  saveUser(){
    this.loginService.createUser(this.user).subscribe(
      data=>{

      console.log(data);
      window.location.href="/dashboard"
    },
    error => console.log(error));
  }

  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }
  user:User=new User();
  constructor(private loginService:LoginService){}

}


