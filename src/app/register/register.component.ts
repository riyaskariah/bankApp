import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname = ""
  acc_no = ""
  pswd = ""


  constructor(private db: DataService, private router: Router) { }

  ngOnInit(): void {
  }
  register() {
    var accno = this.acc_no
    var uname = this.uname
    var pswd = this.pswd
    const result = this.db.register(uname, accno, pswd)

    if (result) {
      alert("Successfully registered !!!!")
      this.router.navigateByUrl("")
    }
    else {
      alert("User already exist !!! Please log in")
    }
  }

}
