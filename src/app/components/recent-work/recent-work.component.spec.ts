import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentWorkComponent } from './recent-work.component';

describe('RecentWorkComponent', () => {
  let component: RecentWorkComponent;
  let fixture: ComponentFixture<RecentWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
