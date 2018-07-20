import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TareaItemComponent } from './tarea-item.component';
import { ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule,HttpClient} from '@angular/common/Http';
import { TareaService } from '../shared/tarea.service';


fdescribe('TareaItemComponent', () => {
  let component: TareaItemComponent;
  let fixture: ComponentFixture<TareaItemComponent>;
  let http : HttpClient;
  let tareaservice: TareaService;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule, HttpClientModule],
      declarations: [ TareaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    tareaservice = new TareaService(http);
    component = new TareaItemComponent(tareaservice);
    fixture = TestBed.createComponent(TareaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('TareaForm should be defined', () => {
    expect(component.tareaForm).toBeDefined();
  });

  it('Debe borrar los valores de los campos', () =>{
        //Arrange
        component.tareaForm.controls['codigo'].setValue('sada');
        component.tareaForm.controls['descripcion'].setValue('sada');
        component.tareaForm.controls['aplicacion'].setValue('sada');
        component.tareaForm.controls['tipo'].setValue('sada');
        component.tareaForm.controls['estadoTarea'].setValue('sada');
        component.tareaForm.controls['fechaAlta'].setValue('sada');
        component.tareaForm.controls['usuario'].setValue('sada');
        component.tareaForm.controls['despliegue'].setValue('sada');
        //Act
        component.onNew();
        let codigo = component.tareaForm.controls['codigo'].value;
        let descripcion = component.tareaForm.controls['descripcion'].value;
        let aplicacion = component.tareaForm.controls['aplicacion'].value;
        let tipo = component.tareaForm.controls['tipo'].value;
        let estadoTarea = component.tareaForm.controls['estadoTarea'].value;
        let fechaAlta = component.tareaForm.controls['fechaAlta'].value;
        let usuario = component.tareaForm.controls['usuario'].value;
        let despliegue = component.tareaForm.controls['despliegue'].value;
        //Assert
        expect(codigo).toBeNull();
        expect(descripcion).toBeNull();
        expect(aplicacion).toBeNull();
        expect(tipo).toBeNull();
        expect(estadoTarea).toBeNull();
        expect(fechaAlta).toBeNull();;
        expect(usuario).toBeNull();
        expect(despliegue).toBeNull();
    })
});
