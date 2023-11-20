
import { Component, OnInit } from '@angular/core';
import {Bill} from '../bill';

import { Route } from '@angular/router';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent {
  bills:Bill[]=[];

  constructor(private loginService:LoginService,
    private router:Router){}

  ngOnInit():void{
   this.getBills();
  }

  getBills(){
    this.loginService.getBillList().subscribe(data=>{
      this.bills=data;
    })
  }

  updateBill(id:string){
    this.router.navigate(['update-bill',id]);
  }

  deleteBill(id:string){
    this.loginService.deleteBill(id).subscribe(data=>{
      console.log(data);
      this.getBills();
    })
  }

  viewBill(id:string){
    this.router.navigate(['bill-details',id]);
  }


}

