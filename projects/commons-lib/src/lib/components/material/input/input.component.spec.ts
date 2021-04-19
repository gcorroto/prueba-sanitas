import { TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { InputMaterialComponent } from './input.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

describe('InputMaterialComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule
      ],
      declarations: [
        InputMaterialComponent
      ],
    }).compileComponents();
  });

  it('should create the InputMaterialComponent', () => {
    const fixture = TestBed.createComponent(InputMaterialComponent);
    const app = fixture.componentInstance;
    app.form = new FormGroup({});
    expect(app).toBeTruthy();
    expect(app.errorControl).toBeTruthy();
  });

});
