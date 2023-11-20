import { Component, OnInit} from '@angular/core';
import { Bill } from '../bill';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-update-bill',
  templateUrl: './update-bill.component.html',
  styleUrls: ['./update-bill.component.css']
})
export class UpdateBillComponent implements OnInit{

  id: string="";

  bill:Bill=new Bill();
  constructor(private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router){

  }

  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.loginService.getBillById(this.id).subscribe(data=>{
      this.bill=data;
    })
  }

  // updateBill(){
  //   this.loginService.updateBill(this.id,this.bill)
  //   .subscribe(data=>{
  //     console.log(data);
  //     this.bill=new Bill();
  //     this.goToEmployeeList();
  //   })
  // }
  goToEmployeeList(){
    this.router.navigate(['/bills'])};

  onSubmit() {
    this.updateBill();
    }

  // updateBill(){
  //   this.loginService.updateBill(this.id, this.bill)
  //     .subscribe({
  //       next: (data) => console.log(data),
  //       error: (error) => console.log(error),
  //       complete: () => this.goToEmployeeList()
  //     })
  // }

  updateBill(){
    this.loginService.updateBill(this.id, this.bill)
      .subscribe((data) => {
        console.log(data);
        this.goToEmployeeList();
      }, (error) => {
        console.log(error);
      })
}

 
  
}

  
    

