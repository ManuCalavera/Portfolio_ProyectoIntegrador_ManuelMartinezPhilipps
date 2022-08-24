import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HsyssComponent } from './hsyss.component';

describe('HsyssComponent', () => {
  let component: HsyssComponent;
  let fixture: ComponentFixture<HsyssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HsyssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HsyssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
