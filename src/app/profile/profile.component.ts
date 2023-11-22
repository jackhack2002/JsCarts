import { Component } from '@angular/core';
import { UserInfoService } from '../services/user/user-info.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  firstName: any = 'jacob';
  lastName: any = 'jabakumar S';
  Email: any = 'jacobjabakumar2002@gmail.com';
  phoneNumber: any = '7305283377';
  Address: any = '55/12, chinna colony, vanagram road,athipet';

  onSubmit() {
    throw new Error('Method not implemented.');
  }

  profileForm:FormGroup= new FormGroup({});
  userId: any;
  NAME: any;
  user: any;
  isDisabled:boolean;
  enable:boolean;

  constructor(private userInfo: UserInfoService) {
    this.userId = '';
    this.NAME = 'Jacob';
    this.isDisabled=true;
    this.enable=true;
  }
  ngOnInit(): void {
    this.getUser();
    this.user=localStorage.getItem('users');
  }

  getUser() {
    // this.userInfo.getDatas();
    this.userInfo.currentUserProfile$.subscribe((user) => {
      // this.profileForm.patchValue({...user});
    });
  }

  updateUser(id: any, form: any) {
    this.userInfo.updateData(id);
  }

  deleteUser(id: any) {
    this.userInfo.deleteData(id);
  }

  enableButton() {
    this.isDisabled = !this.isDisabled;
  }

  enableSave(){
    this.enable = this.enable;
  }


}
