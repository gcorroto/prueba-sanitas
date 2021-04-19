import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonIonicComponent } from './button.component';

describe('ButtonIonicComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ButtonIonicComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  it('should create the ButtonIonicComponent', () => {
    const fixture = TestBed.createComponent(ButtonIonicComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render label', () => {
    const fixture = TestBed.createComponent(ButtonIonicComponent);
    const component = fixture.componentInstance;
    component.label = 'Label button';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.card_button').textContent).toContain('Label button');
  });

});
