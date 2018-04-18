import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAnimeComponent } from './test-anime.component';

describe('TestAnimeComponent', () => {
  let component: TestAnimeComponent;
  let fixture: ComponentFixture<TestAnimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAnimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
