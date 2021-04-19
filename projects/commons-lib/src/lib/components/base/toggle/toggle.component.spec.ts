import { TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { ToggleBaseComponent } from './toggle.component';

describe('ToggleBaseComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatButtonModule,
        MatCardModule,
        RouterTestingModule
      ],
      declarations: [
        ToggleBaseComponent
      ],
    }).compileComponents();
  });

  it('should create the ToggleBaseComponent', () => {
    const fixture = TestBed.createComponent(ToggleBaseComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
