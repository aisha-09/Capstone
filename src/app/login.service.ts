import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { Bill } from './bill';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8080"

  constructor(private http:HttpClient) {}
    //calling the server to generate the token using a class from HttpClientModule
    generateToken(credentials:any){
      //generate token
      return this.http.post(`${this.url}/auth/login`,credentials);

    }

    createUser(user:User){
      return this.http.post(`${this.url}/auth/create-user`,user);

    }

    //for login user->send the token to local storage
    loginUser(token: string){
      localStorage.setItem("token",token);
      return true;
    }

    //function to check if a person is logged in
    isLoggedIn(){
      let token=localStorage.getItem("token");
      if(token==undefined || token==null|| token=='')
      {
        return false;
      }else
      {
        return true;
      }
    }

    logout(){
      localStorage.removeItem("token");
      return true;
    }

    //to get the token
    getToken(){
      return localStorage.getItem("token")
    }

    getBillList():Observable<Bill[]>{
      return this.http.get<Bill[]>(`${this.url}/api/v1/invoices`);    
    }
  
    createBill(bill:Bill):Observable<Object>{
      return this.http.post(`${this.url}/api/v1/invoices`,bill);
    }
  
    getBillById(id:string): Observable<Bill>{
      return this.http.get<Bill>(`${this.url}/api/v1/invoices/${id}`);
    }
  
    updateBill(id: string, bill: Bill): Observable<any>{
      return this.http.put(`${this.url}/api/v1/invoices/${id}`, bill);
    }
  
    deleteBill(id:string): Observable<Object>{
      return this.http.delete(`${this.url}/api/v1/invoices/${id}`);
    }
   
}
