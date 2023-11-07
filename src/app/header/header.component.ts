import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from '../services/user/user-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() isLogout = new EventEmitter<void>()
    isAuthorized: boolean = localStorage.getItem('IsAuthorized') === 'true';
    visible:boolean = true ;

  constructor(private router:Router, private userinfo:UserInfoService){}
  
  Login() {
    this.router.navigate(['/login']); 
  }

  profile(){
    this.router.navigate(['/dashboard/profile']);
    this.visible = !this.visible
  }

  logout(){
    localStorage.removeItem('IsAuthorized');
    localStorage.removeItem('IsAdmin');
      window.location.reload();
      this.router.navigate(['/dashboard/home']);
  }

  cart() {
    if (localStorage.getItem('IsAuthorized')) {
      this.router.navigate(['/cart']);
    } else {
      alert("Login to continue ...");
      this.router.navigate(['/login']);
    }
  }

  menu(){
    this.visible = !this.visible
  }

  Logout(){
    this.userinfo.logout();
    localStorage.removeItem('IsAuthorized');
    localStorage.removeItem('IsAdmin');
      window.location.reload();
      this.router.navigate(['/dashboard/home']);
  }

}
