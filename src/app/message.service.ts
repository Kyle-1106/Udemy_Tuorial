import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages:string[]=[];

  constructor() { }
//メッセージを追加する
  addMessage(message:string){
    this.messages.push(message);
  }
//メッセージを初期化する
  clearMessage(){
    this.messages=[];
  }
}
