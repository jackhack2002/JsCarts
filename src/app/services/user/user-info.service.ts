import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore,AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app'
import { Subject } from 'rxjs';
import {user} from './user'


@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  isLoggedIn : boolean;

 
  constructor(private angularfireauth: AngularFireAuth, private angularfirestore: AngularFirestore) {
    this.isLoggedIn=false;
  }

  async signin(email:string, password:string){
    await this.angularfireauth.signInWithEmailAndPassword(email,password).then(res=>{
      this.isLoggedIn=true;
      localStorage.setItem('user',JSON.stringify(res.user));
    });
  }

  async signup(email:string, password:string){
    await this.angularfireauth.createUserWithEmailAndPassword(email,password).then(res=>{
      this.isLoggedIn=true;
      localStorage.setItem('user',JSON.stringify(res.user));
    });
  }

  logout(){
    this.angularfireauth.signOut();
    localStorage.removeItem('user');
  }

  forgotPassword(email:string){
    this.angularfireauth.sendPasswordResetEmail(email)
  }


}