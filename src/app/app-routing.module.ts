import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './auth-guard.service';
import { RegisterComponent } from './register/register.component';
import { BillListComponent } from './bill-list/bill-list.component';
import { CreateBillComponent } from './create-bill/create-bill.component';
import { UpdateBillComponent } from './update-bill/update-bill.component';
import { BillDetailsComponent } from './bill-details/bill-details.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:"dashboard",
    component:DashboardComponent,
    pathMatch:'full',
    canActivate:[AuthGuardService]
  },
  {
    path:"create-user",
    component:RegisterComponent
  },
  {
    path:'bills',
   component:BillListComponent
  },
  {
    path:'',
    redirectTo:'bills',
    pathMatch:'full'
  },
  {
    path:'create-bill',
    component:CreateBillComponent
  },
  {
    path:'update-bill/:id',
    component:UpdateBillComponent
  },
  {
    path:'bill-details/:id',
    component:BillDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
