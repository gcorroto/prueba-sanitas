import { TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutBaseComponent } from './layout.component';

describe('LayoutBaseComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatButtonModule,
        MatCardModule,
        RouterTestingModule
      ],
      declarations: [
        LayoutBaseComponent
      ],
    }).compileComponents();
  });

  it('should create the LayoutBaseComponent', () => {
    const fixture = TestBed.createComponent(LayoutBaseComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
