import { Component, Input, OnInit } from '@angular/core';
import { MembersComponent } from '../members/members.component';
import { Member } from '../member';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from '../member.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit{
  // member: Member | undefined; // メンバーを格納するプロパティ
  @Input() member:Member| undefined;

  constructor(
    //URLのパラメータ取得
    private route:ActivatedRoute,
    private memberService:MemberService,
    //ブラウザの機能を使用する
    private location:Location){

    };
    


  ngOnInit(): void {
      this.getMember;
  }

  getMember(): void {
    const ids = this.route.snapshot.paramMap.get('id');
    const id=Number(ids)

  //   if (!isNaN(id)) { // id が数値であることを確認
  //     this.memberService.getMember(id).subscribe((member) => {
  //       this.member = member;
  //     });
  //   } else {
  //     console.error('Invalid member ID'); // 例外処理：無効なIDの場合
  //   }
  // }
  // goback():void{
  //   this.location.back();
  // }


  }}
