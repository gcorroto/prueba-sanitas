import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToggleIonicComponent } from './toggle.component';

describe('ToggleIonicComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ToggleIonicComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  it('should create the ToggleIonicComponent', () => {
    const fixture = TestBed.createComponent(ToggleIonicComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
