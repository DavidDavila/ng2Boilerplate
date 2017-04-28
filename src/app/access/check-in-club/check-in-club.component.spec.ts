import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInClubComponent } from './check-in-club.component';

describe('CheckInClubComponent', () => {
  let component: CheckInClubComponent;
  let fixture: ComponentFixture<CheckInClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckInClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
