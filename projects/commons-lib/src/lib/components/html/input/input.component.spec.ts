import { TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { InputHtmlComponent } from './input.component';

describe('InputHtmlComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        InputHtmlComponent
      ],
    }).compileComponents();
  });

  it('should create the InputHtmlComponent', () => {
    const fixture = TestBed.createComponent(InputHtmlComponent);
    const app = fixture.componentInstance;
    app.form = new FormGroup({});
    expect(app).toBeTruthy();
    expect(app.errorControl).toBeTruthy();
  });

});
