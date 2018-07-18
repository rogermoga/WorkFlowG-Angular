import { EstadoTareaPipe } from './estado-tarea.pipe';

fdescribe('EstadoTareaPipe', () => {
  let pipe : EstadoTareaPipe;

   beforeAll(function(){
    pipe = new EstadoTareaPipe();
  });
  
  it('create an instance', () => { 
    expect(pipe).toBeTruthy();
  })

  it('Expect return to be Desarrollo',() =>{
    expect(pipe.transform('DES')).toBe('Desarrollo');
  })

  it('Expect return to be Producción',() =>{
    expect(pipe.transform('patata')).toBe('Producción');
    expect(pipe.transform('asasdas')).toBe('Producción');
    expect(pipe.transform('')).toBe('Producción');
    expect(pipe.transform('%&$%&%')).toBe('Producción');
    expect(pipe.transform('  ')).toBe('Producción');
    expect(pipe.transform('  /&&hhas ')).toBe('Producción');
  })
});
