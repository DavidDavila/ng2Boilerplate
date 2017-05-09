import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCouponComponent } from './modal-coupon.component';

describe('ModalCouponComponent', () => {
  let component: ModalCouponComponent;
  let fixture: ComponentFixture<ModalCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
