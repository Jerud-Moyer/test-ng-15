import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestScrollbersComponent } from './test-scrollbers.component';

describe('TestScrollbersComponent', () => {
  let component: TestScrollbersComponent;
  let fixture: ComponentFixture<TestScrollbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestScrollbersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestScrollbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
