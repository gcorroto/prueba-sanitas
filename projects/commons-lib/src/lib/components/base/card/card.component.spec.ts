import { TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { CardBaseComponent } from './card.component';

describe('CardBaseComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatButtonModule,
        MatCardModule,
        RouterTestingModule
      ],
      declarations: [
        CardBaseComponent
      ],
    }).compileComponents();
  });

  it('should create the CardBaseComponent', () => {
    const fixture = TestBed.createComponent(CardBaseComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
