import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaItemComponent } from './tarea-item.component';

describe('TareaItemComponent', () => {
  let component: TareaItemComponent;
  let fixture: ComponentFixture<TareaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
