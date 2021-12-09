import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {
  loginForm!: FormGroup;
  signupForm!: FormGroup;
  submitted = false;
  hide: boolean = true;
  constructor(private router: Router, private formBuilder: FormBuilder, private userservice: UserService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('[[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$]*')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.signupForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.pattern(/(?=^.{0,40}$)^[a-zA-Z-]+\s[a-zA-Z-]+$/g)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('[[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$]*')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobileNumber: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      service: ['advance']
    });
  }


 
  onLogin() {

    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      let reqData = {
        service: this.loginForm.value.service,
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }

      console.log("valid");
      this.userservice.loginUserService(reqData).subscribe((result: any) => {
        console.log(result);
        localStorage.setItem('token',result.result.accessToken);
        this._snackBar.open("login succesfull", '', {
          duration: 2000,
        })

        this.router.navigateByUrl('/homepage/getallbooks')
       
      }, error => {
        console.log(error);
        this._snackBar.open("Insert Valid Data", '', {
          duration: 2000,
        })

      })
    }

  }



  onSignup() {
    this.submitted = true
    console.log(this.signupForm.value);
    if (this.signupForm.valid) {
      let reqData = {
        service: this.signupForm.value.service,
        fullName: this.signupForm.value.fullName,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
        phone: this.signupForm.value.mobileNumber
      }
      console.log("valid");
      this.userservice.registerUserService(reqData).subscribe((response: any) => {
        console.log(response);

      }, error => {
        console.log(error);
      });


    }
    else {
      console.log("invalid");

    }
  }


}


function token(token: any) {
  throw new Error('Function not implemented.');
}

