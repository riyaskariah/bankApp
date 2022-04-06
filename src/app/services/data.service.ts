import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  database :any = {
    1000: { accno: 1000, uname: "Neer", password: 1000, balance: 5000 },
    1001: { accno: 1001, uname: "Lysha", password: 1001, balance: 3000 },
    1002: { accno: 1002, uname: "jim", password: 1003, balance: 4000 }
  }

  constructor() { }

  register(uname:any,accno:any,password:any){
    let database = this.database
    if(accno in database){
      return false
    }
    else{
      database[accno] = {
        accno,
        uname,
        password,
        balance :0
      }
      console.log(database);
      return true
    }
  }
}
