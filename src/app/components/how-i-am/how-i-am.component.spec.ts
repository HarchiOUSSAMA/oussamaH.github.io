import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowIAmComponent } from './how-i-am.component';

describe('HowIAmComponent', () => {
  let component: HowIAmComponent;
  let fixture: ComponentFixture<HowIAmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowIAmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowIAmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
