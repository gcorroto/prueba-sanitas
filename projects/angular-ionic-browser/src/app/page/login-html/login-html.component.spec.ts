import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginHtmlComponent } from '@page/login-html/login-html.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginHtmlComponent', () => {
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
        LoginHtmlComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LoginHtmlComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'login-html-angular'`, () => {
    const fixture = TestBed.createComponent(LoginHtmlComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('login-html-angular');
    expect(app.iconEmail).toEqual('&#xF002; Email');
    expect(app.iconPassword).toEqual('&#xF002; Password');
  });

});
