  import { Injectable } from '@angular/core';
  import { AngularFireAuth } from "@angular/fire/compat/auth";
  import { AngularFirestore, } from '@angular/fire/compat/firestore';
  import { addDoc, collection, doc, updateDoc,deleteDoc, setDoc} from 'firebase/firestore'
  import { Router } from '@angular/router';
  import { collectionData,docData } from 'rxfire/firestore';
  import { User } from './user';
  import { Observable, from, of } from 'rxjs';
  import { switchMap } from 'rxjs/operators';



  @Injectable({
    providedIn: 'root'
  })
  export class UserInfoService {
    isLoggedIn : boolean;

    userData :any;
    userId:any;
    
    
    get currentUserProfile$(): Observable<User | null> {
      return from(this.angularfireauth.currentUser).pipe(
        switchMap(user => {
          if (!user || typeof user !== 'object' || !('uid' in user)) {
            return of(null);
          }
          const userWithUid = user as { uid: string };
          const ref = doc(this.angularfirestore.firestore, 'users', userWithUid.uid);
          return docData(ref) as Observable<User>;
        })
      );
    }
    
  
    constructor(private angularfireauth: AngularFireAuth, private angularfirestore: AngularFirestore,
      private router:Router
    ) {
      this.isLoggedIn=false;
    }

    async signin(email:string, password:string){
      await this.angularfireauth.signInWithEmailAndPassword(email,password).then(res=>{
        this.isLoggedIn=true;
        localStorage.setItem('user',JSON.stringify(res.user));
      });
    }

    async signup(email:string, password:string){
      return this.angularfireauth.createUserWithEmailAndPassword(email,password).then(res=>{
        this.isLoggedIn=true;
        localStorage.setItem("IsAuthorized", "true");
        this.router.navigate(['/dashboard/home']);
        localStorage.setItem('user',JSON.stringify(res.user));
      }).catch((error)=>{
        alert("Invalid Data");
        console.log(error);
      });
    }

    logout(){
      this.angularfireauth.signOut();
      localStorage.removeItem('user');
    }

    forgotPassword(email:string){
      this.angularfireauth.sendPasswordResetEmail(email)
    }

    
    saveData(form:any){
      const collectionInstance = collection(this.angularfirestore.firestore,'users');
      addDoc(collectionInstance,form.value).then(res =>{
        console.log(res),this.userId=res.id,console.log('data saved successfully');
      }).catch((err)=>{console.log(err)});
        
    }

    getDatas(){
      const collectionInstance= collection(this.angularfirestore.firestore,'users');
      collectionData(collectionInstance,{idField:'id'}).subscribe(val => {
        console.log(val),localStorage.setItem('users',JSON.stringify(val));
      });

      this.userData=collectionData(collectionInstance,{ idField: 'id' });
    }



    addUser(user: User):Observable<any>{
      const ref = doc(this.angularfirestore.firestore,'users',user?.uid);
      return from(setDoc(ref,user));
    }

    updateData(user: User):Observable<any>{
      const ref = doc(this.angularfirestore.firestore,'users',user?.uid);
      return from(updateDoc(ref,{...user}));
    }

    deleteData(user: User):Observable<any>{
      const docInstance = doc(this.angularfirestore.firestore,'users',user?.uid);
      return from(deleteDoc(docInstance).then(()=>{
        alert('Data Deleted !');
      }))
    }


  }