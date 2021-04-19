import { Component, Input, OnInit } from '@angular/core';
import { ButtonBaseComponent } from '../../base/button/button.component';

@Component({
  selector: 'san-pt-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonIonicComponent extends ButtonBaseComponent implements OnInit {
  ngOnInit(): void {
    window.dispatchEvent(new Event('resize'));
  }
}
