import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  passwordResetForm!: FormGroup;
  submitted = false;
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.passwordResetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
     
    });

  }
  oncreateaccount() {
    this.router.navigateByUrl('/login-signup')
  }
  onSubmit(){

  }
}
