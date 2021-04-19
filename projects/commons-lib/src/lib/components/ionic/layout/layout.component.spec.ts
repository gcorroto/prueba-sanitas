import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutIonicComponent } from './layout.component';

describe('LayoutIonicComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        LayoutIonicComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  it('should create the LayoutIonicComponent', () => {
    const fixture = TestBed.createComponent(LayoutIonicComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
