import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToggleMaterialComponent } from './toggle.component';

describe('ToggleMaterialComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ToggleMaterialComponent
      ],
    }).compileComponents();
  });

  it('should create the ToggleMaterialComponent', () => {
    const fixture = TestBed.createComponent(ToggleMaterialComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
