import { TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { InputBaseComponent } from './input.component';

describe('InputBaseComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatButtonModule,
        MatCardModule,
        RouterTestingModule
      ],
      declarations: [
        InputBaseComponent
      ],
    }).compileComponents();
  });

  it('should create the InputBaseComponent', () => {
    const fixture = TestBed.createComponent(InputBaseComponent);
    const app = fixture.componentInstance;
    app.form = new FormGroup({});
    expect(app).toBeTruthy();
    expect(app.errorControl).toBeTruthy();
  });

});
