import { Calculator } from "./calculator";

fdescribe('TestSuite para probar la calculadora', () =>{
    it('Pruebas de multiply debe retornar 9', () =>{
        //Arrange
        let calculator = new Calculator();
        //Act
        let resultado = calculator.multiply(3,3);
        //Assert
        expect(resultado).toBe(9);
    })

    xit('Pruebas de multiply debe retornar 9', () =>{
        //Arrange
        let calculator = new Calculator();
        //Act
        let resultado = calculator.multiply(3,3);
        //Assert
        expect(resultado).toBe(9);
    })

    it('Pruebas de divide debe retornar 3', () =>{
        //Arrange
        let calculator = new Calculator();
        //Act
        let resultado = calculator.divide(9,3);
        //Assert
        expect(resultado).toBe(3);
    })

    it('Pruebas de divide por 0, debe retornar null', () =>{
        //Arrange
        let calculator = new Calculator();
        //Act
        let resultado = calculator.divide(9,0);
        //Assert
        expect(resultado).toBe(null);
    })
});