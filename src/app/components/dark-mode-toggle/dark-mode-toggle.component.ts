import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.scss']
})
export class DarkModeToggleComponent {
  @Output()
  public hasModeChanged: EventEmitter<Boolean> = new EventEmitter(false);

  public isModeChanged = false;

  public changeMode(): void {
    this.hasModeChanged.emit(!this.isModeChanged);
  }
}
