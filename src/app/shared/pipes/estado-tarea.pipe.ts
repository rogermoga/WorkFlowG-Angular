import { Pipe, PipeTransform } from '@angular/core';
/**
 * Pipe that evaluates the value of the selector if it's DES it displays Desarrollo.
 * In any other cases it returns Producción
 */
@Pipe({
  name: 'estadoTarea'
})
export class EstadoTareaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value == 'DES'){
      return 'Desarrollo';
    }else{
      return 'Producción';
    }
  }

}
