import { Pipe, PipeTransform } from '@angular/core';

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
