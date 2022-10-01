import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeToggleComponent } from './dark-mode-toggle/dark-mode-toggle.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [DarkModeToggleComponent, HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [DarkModeToggleComponent, HeaderComponent],
})
export class ComponentsModule { }
