import { TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { ToggleHtmlComponent } from './toggle.component';

describe('ToggleHtmlComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ToggleHtmlComponent
      ],
    }).compileComponents();
  });

  it('should create the ToggleHtmlComponent', () => {
    const fixture = TestBed.createComponent(ToggleHtmlComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
