import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallElementGridComponent } from './tall-element-grid.component';

describe('TallElementGridComponent', () => {
  let component: TallElementGridComponent;
  let fixture: ComponentFixture<TallElementGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallElementGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TallElementGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
