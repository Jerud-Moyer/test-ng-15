import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acomp2Component } from './acomp2.component';

describe('Acomp2Component', () => {
  let component: Acomp2Component;
  let fixture: ComponentFixture<Acomp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Acomp2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
