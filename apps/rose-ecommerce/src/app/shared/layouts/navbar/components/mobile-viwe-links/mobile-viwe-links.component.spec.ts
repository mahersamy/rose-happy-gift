import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileViweLinksComponent } from './mobile-viwe-links.component';

describe('MobileViweLinksComponent', () => {
  let component: MobileViweLinksComponent;
  let fixture: ComponentFixture<MobileViweLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileViweLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileViweLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
