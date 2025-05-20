import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCarouselComponent } from './grid-carousel.component';

describe('GridCarouselComponent', () => {
  let component: GridCarouselComponent;
  let fixture: ComponentFixture<GridCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
