import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from '../services/user/user-info.service';
import { User } from '../services/user/user';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
})
export class UserRegistrationComponent  {
 



  changetype:boolean;
  viewIcon:boolean;



  public constructor(
    private router: Router,
    private userinfo: UserInfoService
  ) {
    this.changetype=true;
    this.viewIcon=true;

  
  }


  async register(form:any) {
    console.log(form.value);
    console.log(form.value.email,form.value.password);
    this.userinfo.signup(form.value.email, form.value.password);
    this.userinfo.saveData(form);
    
  }
  

  login(){
    this.router.navigate(['/login'])
  }

  showPassword(){
    this.changetype = !this.changetype;
    this.viewIcon = !this.viewIcon;
  }


}
