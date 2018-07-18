import { Pipe, PipeTransform } from '@angular/core';
/**
 * Pipe that evaluates if there an email, if there is not it displays: no email
 */
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
