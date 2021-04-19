
import { BrowserModule } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginIonicComponent } from './login-ionic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';

describe('LoginIonicComponent', () => {
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
        LoginIonicComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LoginIonicComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'login-ionic-angular'`, () => {
    const fixture = TestBed.createComponent(LoginIonicComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('login-ionic-angular');
    expect(app.iconEmail).toEqual('person-outline');
    expect(app.iconPassword).toEqual('lock-closed-outline');
  });

});
