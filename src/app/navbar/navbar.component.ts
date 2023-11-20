import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public loggedIn=false;

  constructor(private loginService: LoginService){

  }

  ngOnInit():void{
    this.loggedIn=this.loginService.isLoggedIn();
  }

  logOutUser(){
    this.loginService.logout();
    location.reload();
  }

}
