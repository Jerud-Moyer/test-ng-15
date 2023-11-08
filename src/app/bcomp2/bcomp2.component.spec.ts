import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bcomp2Component } from './bcomp2.component';

describe('Bcomp2Component', () => {
  let component: Bcomp2Component;
  let fixture: ComponentFixture<Bcomp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bcomp2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bcomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
