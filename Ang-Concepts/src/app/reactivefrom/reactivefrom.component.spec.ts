import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivefromComponent } from './reactivefrom.component';

describe('ReactivefromComponent', () => {
  let component: ReactivefromComponent;
  let fixture: ComponentFixture<ReactivefromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivefromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivefromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
