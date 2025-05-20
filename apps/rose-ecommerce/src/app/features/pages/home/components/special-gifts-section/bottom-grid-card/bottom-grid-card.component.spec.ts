import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomGridCardComponent } from './bottom-grid-card.component';

describe('BottomGridCardComponent', () => {
  let component: BottomGridCardComponent;
  let fixture: ComponentFixture<BottomGridCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomGridCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomGridCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
