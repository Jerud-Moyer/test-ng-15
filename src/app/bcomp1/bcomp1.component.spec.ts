import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bcomp1Component } from './bcomp1.component';

describe('Bcomp1Component', () => {
  let component: Bcomp1Component;
  let fixture: ComponentFixture<Bcomp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bcomp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bcomp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
