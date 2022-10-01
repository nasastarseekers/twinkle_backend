import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'twinkle-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input()
  public isModeChanged!: boolean;
}
