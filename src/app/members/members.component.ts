import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MEMBERS } from '../mock-member';
import { MemberService } from '../member.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit{
  members:Member[];

  constructor(
    private memberService:MemberService,
    private messageService:MessageService){
    this.memberService=memberService;
  }
  
  selectedMember:Member;

  ngOnInit(): void {
    //コンポーネント初期化のタイミングで実行される
    //UIの調整や、データ取得、プロパティの初期化を行う
      this.getMembers();
  }
  onSelect(member:Member):void{
    this.selectedMember=member;
    this.messageService.addMessage(`MemberService:社員データ(id=${member.id})の${member.name}を取得しました`)
  }
  //サービスクラスからメンバーを取得するメソッドを呼び出す
  getMembers():void{
    //非同期処理の実装
    this.memberService.getMembers()
    .subscribe(members=>this.members=members);
  }
}
