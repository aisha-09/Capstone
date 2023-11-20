
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bill } from '../bill';

import jsPDF from 'jspdf';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css']
})
export class BillDetailsComponent {
  // @ViewChild('content',{static:false}) el!: ElementRef;

  id:string="";
  bill!:Bill ;
  total_amt: number = 0;

  constructor(private route: ActivatedRoute,
    private loginService: LoginService){

  }

  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    // this.bill=new Bill();
    this.bill = history.state.bill;
    this.total_amt = history.state.total_amt;
    if (!this.bill) { this.bill = new Bill();
      this.loginService.getBillById(this.id).subscribe(data => { this.bill = data; }) } }
  //   this.billService.getBillById(this.id).subscribe(data=>{
  //     this.bill=data;
      
  //   })
  // }

  @ViewChild('content',{static:false}) el!: ElementRef
  makePdf(){
      let pdf= new jsPDF('p','pt','a3');
      pdf.html(this.el.nativeElement,{
        callback:(pdf=>{
          pdf.save("invoice.pdf");
        })
      })
  }
  // makePdf() {
  //   let pdf= new jsPDF();
  //   pdf.html(this.el.nativeElement, {
  //     callback: (pdf) => {
  //       pdf.save("invoice.pdf");
  //     }
  //   });
  // }

 
}
