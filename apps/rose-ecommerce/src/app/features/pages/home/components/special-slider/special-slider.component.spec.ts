import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialSliderComponent } from './special-slider.component';

describe('SpecialSliderComponent', () => {
  let component: SpecialSliderComponent;
  let fixture: ComponentFixture<SpecialSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
