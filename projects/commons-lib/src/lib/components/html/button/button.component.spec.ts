import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonHtmlComponent } from './button.component';

describe('ButtonHtmlComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ButtonHtmlComponent
      ],
    }).compileComponents();
  });

  it('should create the ButtonHtmlComponent', () => {
    const fixture = TestBed.createComponent(ButtonHtmlComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render label', () => {
    const fixture = TestBed.createComponent(ButtonHtmlComponent);
    const component = fixture.componentInstance;
    component.label = 'Label button';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.card_button').textContent).toContain('Label button');
  });

});
