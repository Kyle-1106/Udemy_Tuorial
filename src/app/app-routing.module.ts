import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';

const routes:Routes=[
  {path:"",redirectTo:"/dashboard",pathMatch:"full"},
  {path:"members",component:MembersComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"detail/:id",component:MemberDetailComponent}
]

@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)],
    
  ],
  exports:[
    [RouterModule],
  ]
})
export class AppRoutingModule { }
