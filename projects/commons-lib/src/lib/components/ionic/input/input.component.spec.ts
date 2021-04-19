import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { InputIonicComponent } from './input.component';

describe('InputIonicComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        InputIonicComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  it('should create the InputIonicComponent', () => {
    const fixture = TestBed.createComponent(InputIonicComponent);
    const app = fixture.componentInstance;
    app.form = new FormGroup({});
    expect(app).toBeTruthy();
    expect(app.errorControl).toBeTruthy();
  });
});
