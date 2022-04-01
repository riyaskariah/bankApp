import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "Your perfect banking partner"
  accnum = "Account Number Please!!"
  acc_no = ""
  pswd = ""

  database = {
    1000: { accno: 1000, uname: "Neer", password: 1000, balance: 5000 },
    1001: { accno: 1001, uname: "Lysha", password: 1001, balance: 3000 },
    1002: { accno: 1002, uname: "jim", password: 1003, balance: 4000 }
  }
  constructor() { }

  ngOnInit(): void {
  }

  login() {
    alert("Login button clicked")
  }
  accNoChange(event: any) {
    this.acc_no = event.target.value
    //console.log(this.acc_no)
  }

  pswdChange(event: any) {
    this.pswd = event.target.value
    //console.log(this.pswd)
  }
  
}
