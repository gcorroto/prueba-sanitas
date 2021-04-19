import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutHtmlComponent } from './layout.component';

describe('LayoutHtmlComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        LayoutHtmlComponent
      ],
    }).compileComponents();
  });

  it('should create the LayoutHtmlComponent', () => {
    const fixture = TestBed.createComponent(LayoutHtmlComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
