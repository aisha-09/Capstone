// import { Component, OnInit } from '@angular/core';
// import { Bill } from '../bill';
// import { BillService } from '../bill.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-create-bill',
//   templateUrl: './create-bill.component.html',
//   styleUrls: ['./create-bill.component.css']
// })
// export class CreateBillComponent implements OnInit{

//   bill: Bill=new Bill();
//   constructor(private billService: BillService,
//     private router: Router){
//   }

//   ngOnInit():void{

//   }
//   saveBill(){
//     this.billService.createBill(this.bill).subscribe(
//       data=>{

//       console.log(data);
//       this.goToBillList();
//     },
//     error => console.log(error));
//     // {
//     //   next: () => this.goToBillList(),
//     //   // next: data=> this.goToBillList(),
//     //   error: error => console.log(error),
//     //   complete: () => console.log("Observable completed.")
     
//     // });
//   }
//   goToBillList(){
//     this.router.navigate(['/bills']);
//     // this.saveBill();
//   }

//   // saveBill(){
//   //   this.billService.createBill(this.bill)
//   //     .subscribe({
//   //       next: (data) => console.log(data),
//   //       error: (error) => console.log(error),
//   //       complete: () => this.goToBillList()
//   //     })
//   // }

//   // goToBillList(){
//   //   this.router.navigate(['/bills'])
//   //   this.saveBill();
//   // };
  

//   onSubmit(){
//     console.log(this.bill);
//     this.saveBill();
//   }



// }


import { Component, OnInit } from '@angular/core';
import { Bill } from '../bill';

import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-create-bill',
  templateUrl: './create-bill.component.html',
  styleUrls: ['./create-bill.component.css']
})
export class CreateBillComponent implements OnInit{

  bill: Bill=new Bill();
  constructor(private loginService: LoginService,
    private router: Router){
  }

  ngOnInit():void{

  }

  
  
  saveBill(){
    this.loginService.createBill(this.bill).subscribe(
      data=>{

      console.log(data);
      this.goToBillList();
    },
    error => console.log(error));
    // {
    //   next: () => this.goToBillList(),
    //   // next: data=> this.goToBillList(),
    //   error: error => console.log(error),
    //   complete: () => console.log("Observable completed.")
     
    // });
  }
  

  // saveBill(){
  //   this.billService.createBill(this.bill)
  //     .subscribe({
  //       next: (data) => console.log(data),
  //       error: (error) => console.log(error),
  //       complete: () => this.goToBillList()
  //     })
  // }

  // goToBillList(){
  //   this.router.navigate(['/bills'])
  //   this.saveBill();
  // };
  

  onSubmit(){
    console.log(this.bill);
    this.calculateTotalAmount();
    this.saveBill();
  }
  // AddItem(){
  //   this.bill.items.push({name: '', price: null, quantity: null});

  // }
  goToBillList(){
    this.router.navigate(['/bills']
    // ,this.bill.id],
    //  { state: { bill: this.bill, total_amt: this.bill.total_amt } }
     ); }
    // this.saveBill();
  
  addItem() {
    this.bill.items.push({name:"", price: 0.0, quantity: 1});
  }

  calculateTotalAmount() {
     let totalAmount = 0;
    this.bill.items.forEach(item => { totalAmount += (item.price * item.quantity); });
    totalAmount=totalAmount+(this.bill.taxes/100)*totalAmount;
    totalAmount=totalAmount-(this.bill.taxes/100)*totalAmount;
     this.bill.total_amt = totalAmount; }

    

}
