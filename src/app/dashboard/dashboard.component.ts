import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../member.service';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  members:Member[]=[];


  constructor(private memberService:MemberService){
  }
  ngOnInit(): void {
      this.getMembers();
  }

  getMembers():void{
    console.log(this.members)
    this.memberService.getMembers()
    .subscribe(members=>this.members=members.slice(1.5))
    console.log(this.members)
  }
}
