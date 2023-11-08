import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acomp1Component } from './acomp1.component';

describe('Acomp1Component', () => {
  let component: Acomp1Component;
  let fixture: ComponentFixture<Acomp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Acomp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acomp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
