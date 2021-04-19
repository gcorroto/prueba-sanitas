import { TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonBaseComponent } from './button.component';

describe('ButtonBaseComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatButtonModule,
        MatCardModule,
        RouterTestingModule
      ],
      declarations: [
        ButtonBaseComponent
      ],
    }).compileComponents();
  });

  it('should create the ButtonBaseComponent', () => {
    const fixture = TestBed.createComponent(ButtonBaseComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
