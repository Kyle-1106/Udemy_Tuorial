import { Injectable } from '@angular/core';
import { Member } from './member';
import { MEMBERS } from './mock-member';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

//データを返すなど具体的な処理はサービスクラスに実装する
@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private messageService:MessageService) {
    
   }

  //モックの中のデータを返すメソッド作成
  //サーバやDBからデータを取得する際には非同期処理で実装するべきなので、Observableを返すようにする
  getMembers():Observable<Member[]>{
    //of関数を使用して、Observable型にする。
    return of(MEMBERS);
  }
}
