import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecksV3Component } from './checks-v3.component';

describe('ChecksV3Component', () => {
  let component: ChecksV3Component;
  let fixture: ComponentFixture<ChecksV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ChecksV3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecksV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
