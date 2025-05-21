import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneCircularComponent } from './done-circular.component';

describe('DoneCircularComponent', () => {
  let component: DoneCircularComponent;
  let fixture: ComponentFixture<DoneCircularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoneCircularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoneCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
