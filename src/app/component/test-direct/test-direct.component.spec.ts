import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDirectComponent } from './test-direct.component';

describe('TestDirectComponent', () => {
  let component: TestDirectComponent;
  let fixture: ComponentFixture<TestDirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
