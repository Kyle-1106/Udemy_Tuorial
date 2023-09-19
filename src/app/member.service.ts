import { Injectable } from '@angular/core';
import { Member } from './member';
import { MEMBERS } from './mock-member';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { ConstantPool } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private messagesUrl="api/members"

  constructor(private messageService: MessageService,private http:HttpClient) { }

  getMembers(): Observable<Member[]> {
    this.messageService.addMessage('MemberService: 社員一覧データを取得しました');
    this.http.get<Member[]>(this.messagesUrl)
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


  private log(message:string){
    this.messageService.addMessage(`messageService:${{message}`)
  }
}


