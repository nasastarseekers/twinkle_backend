import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstStepComponent } from './first-step/first-step.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  declarations: [FirstStepComponent],
  imports: [
    CommonModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ]
})
export class StepsModule { }
