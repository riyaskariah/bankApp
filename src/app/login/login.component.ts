import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  database :any = {
    1000: { accno: 1000, uname: "Neer", password: 1000, balance: 5000 },
    1001: { accno: 1001, uname: "Lysha", password: 1001, balance: 3000 },
    1002: { accno: 1002, uname: "jim", password: 1003, balance: 4000 }
  }
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

 
  accNoChange(event: any) {
    this.acc_no = event.target.value
    
  }

  pswdChange(event: any) {
    this.pswd = event.target.value
    
  }

// using event binding / two way binding
  login() {
    console.log(this.acc_no)
    console.log(this.pswd)
    
   var acno = this.acc_no
   var pswrd = this.pswd
   let database = this.database
   if(acno in database){

     if(pswrd == database[acno]["password"]){
      alert("Login successfull !!!!")
      this.router.navigateByUrl("dashboard ")
     }
     else{
       alert("Invalid password !!!!")
     }

   }
   else{
     alert("User doesnt exist !!!!!!!!!!!")
   }
  }

// login using template referencing variable
  // login(a:any,p:any) {
  //   var acno = a.value
  //   var pswrd = p.value
  //   let database = this.database
  //   if(acno in database){
 
  //     if(pswrd == database[acno]["password"]){
  //      alert("Login successfull !!!!")
  //     }
  //     else{
  //       alert("Invalid password !!!!")
  //     }
 
  //   }
  //   else{
  //     alert("User doesnt exist !!!!!!!!!!!")
  //   }
  //  }
 

}
