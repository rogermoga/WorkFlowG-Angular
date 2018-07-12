import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaPrintComponent } from './tarea-print.component';

describe('TareaPrintComponent', () => {
  let component: TareaPrintComponent;
  let fixture: ComponentFixture<TareaPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
