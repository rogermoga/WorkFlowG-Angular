import { Helloworld } from "./helloworld";


fdescribe('test del helloworld', ()=>{
    it('should return Helloworld!', ()=>{
        let helloworld =  new Helloworld();

        let mensaje = helloworld.sayhello();

        expect(mensaje).toBe("Helloworld!");
    })
})