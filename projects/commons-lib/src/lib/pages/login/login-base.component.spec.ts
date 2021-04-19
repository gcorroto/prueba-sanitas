import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginBaseComponent } from './login-base.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginBaseComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        RouterTestingModule
      ],
      declarations: [
        LoginBaseComponent
      ],
    }).compileComponents();
  });

  it('should create the LoginBaseComponent', () => {
    const fixture = TestBed.createComponent(LoginBaseComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should validate email control', () => {
    const fixture = TestBed.createComponent(LoginBaseComponent);
    const app = fixture.componentInstance;
    app.loginForm.controls.email.setValue('asd');
    app.loginForm.updateValueAndValidity();
    fixture.detectChanges();
    expect(app.loginForm.controls.email.hasError('pattern')).toBeTruthy();
    app.loginForm.controls.email.setValue('');
    app.loginForm.updateValueAndValidity();
    fixture.detectChanges();
    expect(app.loginForm.controls.email.hasError('required')).toBeTruthy();
    app.loginForm.controls.email.setValue('test@test.com');
    app.loginForm.updateValueAndValidity();
    fixture.detectChanges();
    expect(app.loginForm.controls.email.hasError('required') || app.loginForm.controls.email.hasError('pattern')).toBeFalse();
  });

  it('should validate password control', () => {
    const fixture = TestBed.createComponent(LoginBaseComponent);
    const app = fixture.componentInstance;
    app.loginForm.controls.password.setValue('asd');
    app.loginForm.updateValueAndValidity();
    fixture.detectChanges();
    expect(app.loginForm.controls.password.hasError('minlength')).toBeTruthy();
    app.loginForm.controls.password.setValue('');
    app.loginForm.updateValueAndValidity();
    fixture.detectChanges();
    expect(app.loginForm.controls.password.hasError('required')).toBeTruthy();
    app.loginForm.controls.password.setValue('asdasd');
    app.loginForm.updateValueAndValidity();
    fixture.detectChanges();
    expect(app.loginForm.controls.password.hasError('required') && app.loginForm.controls.password.hasError('minlength')).toBeFalse();
  });


});
