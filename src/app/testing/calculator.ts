export class Calculator {
    /**
     * Performs a multiplication
    * @example
    * Simply call it with 2 numbers: 
    * multiply(2, 3)
     * @param numberA first number
     * @param numberB second number
     * @returns The multiplication of a by b
     */
    multiply(numberA: number, numberB: number) {
        return numberA * numberB;
    }
    /**
     * Performs a division
    * @example
    * Simply call it with 2 numbers: 
    * divide(2, 3)
     * @param numberA first number
     * @param numberB second number
     * @returns The division of a by b
     */
    divide(numberA: number, numberB: number) {
        if (numberB === 0) return null;
        return numberA / numberB;
    }
}
