import { EstadoEmailPipe } from './estado-email.pipe';
import { pipe } from '@angular/core/src/render3/pipe';

fdescribe('EstadoEmailPipe', () => {
  let pipe:EstadoEmailPipe;
  
  beforeAll(function(){
    pipe = new EstadoEmailPipe;
  })
  it('create an instance', () => {
   
    expect(pipe).toBeTruthy();
  })
  it('When no email expect return to be no email', ()=>{
    expect(pipe.transform("")).toBe("no email");
  })

  it('When some email expect return to be some email', ()=>{
    expect(pipe.transform("eaaw")).toBe("eaaw");
    expect(pipe.transform("  ")).toBe("  ");
  });
});
