import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommPreferencesComponent } from './comm-preferences.component';

describe('CommPreferencesComponent', () => {
  let component: CommPreferencesComponent;
  let fixture: ComponentFixture<CommPreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommPreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
