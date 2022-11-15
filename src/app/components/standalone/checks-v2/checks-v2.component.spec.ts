import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecksV2Component } from './checks-v2.component';

describe('ChecksV2Component', () => {
  let component: ChecksV2Component;
  let fixture: ComponentFixture<ChecksV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ChecksV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecksV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
