import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from '../services/user/user-info.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {

  email: string;
  password: string;
  changetype:boolean;
  viewIcon:boolean;


  public constructor(
    private router: Router,
    private userinfo: UserInfoService
  ) {
    this.email = '';
    this.password = '';
    this.changetype=true;
    this.viewIcon=true;
  }


  register(){
    this.router.navigate(['/register']); 
  }


  async login(email:string,password:string){
    await this.userinfo.signin(email,password);
    if (this.userinfo.isLoggedIn) {
      localStorage.setItem("IsAuthorized","true");
      this.router.navigate(['/dashboard/home']);
    }else{
      alert("Invalid Data");
    }
    }

    ForgotPassword(email:string){
      if (email) {
        this.userinfo.forgotPassword(email);
        window.location.reload();
      }else{
        alert('Fill Email Field !');
      }
      
    }

    showPassword(){
      this.changetype = !this.changetype;
      this.viewIcon = !this.viewIcon;
    }


}
