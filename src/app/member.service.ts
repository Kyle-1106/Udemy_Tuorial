import { Injectable } from '@angular/core';
import { Member } from './member';
import { MEMBERS } from './mock-member';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { ConstantPool } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private messageService: MessageService) { }

  getMembers(): Observable<Member[]> {
    this.messageService.addMessage('MemberService: 社員一覧データを取得しました');
    return of(MEMBERS);
  }

  // getMember(id: number): Observable<Member> {
  //   this.messageService.addMessage(`MemberService: 社員データ(id=${id})を取得しました`);
  //   const detailMember=of(MEMBERS.find(member => member.id === id));
  //   if(detailMember instanceof Observable<Member>){
  //     return detailMember;
  //   }
  //   else{
  //     console.log("該当なし")
  //   }
    
    
  // }
}
