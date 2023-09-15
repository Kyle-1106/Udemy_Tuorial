import { Component, Input, OnInit } from '@angular/core';
import { MembersComponent } from '../members/members.component';
import { Member } from '../member';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit{
  
  @Input() member:Member;


  ngOnInit(): void {
      
  }
}
