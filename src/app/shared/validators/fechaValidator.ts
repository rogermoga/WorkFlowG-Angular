import { FormControl } from "@angular/forms";

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