import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  credentials={
    email:'',
    password:''
  }

  constructor(private loginService:LoginService){}

  onSubmit(){
    if((this.credentials.password!='' && this.credentials.email!='')&&(this.credentials.email!=null &&this.credentials.password!=null))
    {
      //token generation
      this.loginService.generateToken(this.credentials).subscribe(
        (response:any)=>{
          //if token is generated successfull
          console.log(response.token)
          this.loginService.loginUser(response.token)
          window.location.href="/bills"

        },
        error=>{
          //if error
          console.log(error)

        }
      )
    }
    else
    {
      console.log("Credentials empty")
    }
  }

  ngOnInit(): void {
    
  }

}
