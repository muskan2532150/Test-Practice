const Calculator = require('./calculate');
const {method,secMethod,thirdMethod} = require('./index');

describe('stringLength', () => {
    it('check whether the length of string between 1-10', () => {
             expect(method('hello!')).toBeGreaterThanOrEqual(1);
             expect(method('hello!')).toBeLessThanOrEqual(10);
             expect(method('muskan')).toBeGreaterThanOrEqual(1);
             expect(method('muskan')).toBeLessThanOrEqual(10);
             expect(method('namaste')).toBeGreaterThanOrEqual(1);
             expect(method('namaste')).toBeLessThanOrEqual(10);
    })

    it('check whether the string reverse or not', () => {
        expect(secMethod('hello!')).toMatch('!olleh');  
        expect(secMethod('namaste')).toMatch('etsaman');  
    })

    it('check string is Capitalized or not', () => {
            expect(thirdMethod('hello!')).toMatch('Hello!');
        expect(thirdMethod('same')).toMatch('Same');    
    })
    
})

describe('Calculator', () => {
    const calculate = new Calculator();
    it('chech add function', () => {
        expect(calculate.add(1,2)).toBe(3);  
        expect(calculate.add(5,7)).toBe(12);  
    })
    it('chech subtract function', () => {
        expect(calculate.subtract(2,1)).toBe(1);  
        expect(calculate.subtract(7,5)).toBe(2); 
    })
    it('chech divide function', () => {
        expect(calculate.divide(2,1)).toBe(2);  
        expect(calculate.divide(7,5)).toBe(1); 
    })
    it('chech divide function', () => {
        expect(calculate.multiply(2,1)).toBe(2);  
        expect(calculate.multiply(7,5)).toBe(35); 
    })
})