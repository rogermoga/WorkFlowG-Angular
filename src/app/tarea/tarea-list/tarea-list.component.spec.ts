import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaListComponent } from './tarea-list.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TareaService } from '../shared/tarea.service';
import { Router } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { EstadoTareaPipe } from '../../shared/pipes/estado-tarea.pipe';
import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';




fdescribe('TareaListComponent', () => {
  let component: TareaListComponent;
  let fixture: ComponentFixture<TareaListComponent>;
  let modal : NgbModal;
  let tareaService : TareaService;
  let router :Router;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[NgxDatatableModule],
      declarations: [  TareaListComponent , EstadoTareaPipe ],
      providers:[HttpClient, NgbModal, NgbModalStack, HttpHandler, Router]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    component = new TareaListComponent(modal, tareaService,router);
    fixture = TestBed.createComponent(TareaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

