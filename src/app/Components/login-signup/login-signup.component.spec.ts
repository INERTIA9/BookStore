import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginSignupComponent } from './login-signup.component';

describe('LoginSignupComponent', () => {
  let component: LoginSignupComponent;
  let fixture: ComponentFixture<LoginSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSignupComponent ],
      imports:[RouterTestingModule,ReactiveFormsModule,HttpClientModule,MatSnackBarModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('onLogin', () => {
    component.onLogin()
    expect(component.onLogin).toBeTruthy();
  });
  it('onSignup', () => {
    component.onSignup()
    expect(component.onSignup).toBeTruthy();
  });

});
