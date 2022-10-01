import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTitleComponent } from './step-title.component';

describe('StepTitleComponent', () => {
  let component: StepTitleComponent;
  let fixture: ComponentFixture<StepTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
