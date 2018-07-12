import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoEmail'
})
export class EstadoEmailPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return 'no email' ;
    }else{
      return value;
    }
  }

}
