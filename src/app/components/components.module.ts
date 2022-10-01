import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeToggleComponent } from './dark-mode-toggle/dark-mode-toggle.component';
import { HeaderComponent } from './header/header.component';
import { StepTitleComponent } from './step-title/step-title.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [DarkModeToggleComponent, HeaderComponent, StepTitleComponent, ButtonComponent],
  imports: [CommonModule],
  exports: [DarkModeToggleComponent, HeaderComponent, StepTitleComponent],
})
export class ComponentsModule {}
