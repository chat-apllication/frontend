import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../../shared/services/common/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email!: string;
  password!: string;
  constructor(private common: CommonService, private router:Router) {

  }
  ngOnInit() {
    console.log(this.router.getCurrentNavigation()) 
  }
  Login() {
    if (this.email && this.password) {
      // this.common.postApi({ email: this.email, password: this.password } , 'login').subscribe((res:any)=>{
      //   this.router.navigate(['dashboard'])
      // })
    }
  }
}