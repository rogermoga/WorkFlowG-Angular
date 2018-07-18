import { FormControl } from "@angular/forms";
/**
 * Custom validator for the date
 * @returns true if the date is valid
 * @param control 
 */
export function fechaValidator(control: FormControl) { 
    let fecha = control.value; 
    let pattern = /^((\d{2})\/(\d{2})\/(\d{4}))$/;
      if (!fecha.match(pattern)) { 
        return {
            validate: true
        };
    }
    
    //return null; 
  }