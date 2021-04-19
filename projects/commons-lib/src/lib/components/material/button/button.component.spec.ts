import { TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonMaterialComponent } from './button.component';

describe('ButtonMaterialComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatButtonModule,
        RouterTestingModule
      ],
      declarations: [
        ButtonMaterialComponent
      ],
    }).compileComponents();
  });

  it('should create the ButtonMaterialComponent', () => {
    const fixture = TestBed.createComponent(ButtonMaterialComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render label', () => {
    const fixture = TestBed.createComponent(ButtonMaterialComponent);
    const component = fixture.componentInstance;
    component.label = 'Label button';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.card_button').textContent).toContain('Label button');
  });

});
