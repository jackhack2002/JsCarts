import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from '../services/user/user-info.service';
import { user } from '../services/user/user';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
})
export class UserRegistrationComponent  {
  // firstname:string;
  // lastname:string;
  // selectedTitle:string;
  // mobile:string;

  // address:string;

  // confirmPassword:string;

  // this.firstname="";
  // this.lastname="";
  // this.selectedTitle="";
  // this.mobile="";

  // this.address="";
  // this.confirmPassword="";

  // registerForm:any={
  //   firstname:"",
  //   lastname:"",
  //   selectedTitle:"",
  //   mobile:"",
  //   email:"",
  //   address:"",
  //   password:'',
  //   confirmPassword:""
  // }

  email: string;
  password: string;


  public constructor(
    private router: Router,
    private userinfo: UserInfoService
  ) {
    this.email = '';
    this.password = '';
  }



  async register(email: string, password: string) {
    await this.userinfo.signup(email,password);
    if (this.userinfo.isLoggedIn) {
      localStorage.setItem("IsAuthorized","true");
      this.router.navigate(['/dashboard/home']);
    }else{
      alert("Invalid Data");
    }
  }

  login(){
    this.router.navigate(['/login'])
  }



}
