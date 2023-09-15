import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MEMBERS } from '../mock-member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit{
  members:Member[]=MEMBERS;
  selectedMember:Member;

  ngOnInit(): void {
      
  }
  onSelect(member:Member):void{
    this.selectedMember=member;
  }
}
