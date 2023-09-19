import { Injectable } from '@angular/core';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService{
  createDb(){
    const members=[
      {id:1,name:"田中太郎"},
      {id:2,name:"佐藤愛"},
      {id:3,name:"鈴木福"}
    ];
    return {members}

  }
  genId(members:Member[]):number{
    return members.length>0? Math.max(...members.map(member=>member.id))+1:11;

  }
}
