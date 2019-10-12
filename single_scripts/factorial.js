/**
 * #  Factorial  
 * **Calculate the factorial of a given number, without using loops**
 * 
 * Factorial n! is defined for positive integers as follows:  
 * ```
 * 0! = 1  
 * n! = 1*2*3*…*n
 * ```
 * Factorial is undefined for negative integers  
 * 
 * ## Function Prototype  
 * `int factorial(int n)`
 * ### Example
 * ```
 * 0 -> 1
 * 1 -> 1
 * 2 -> 2
 * 3 -> 6
 * ```
 */

let factorial = (n) => {
    if (n < 0) return undefined;
  
    return (n === 0 || n === 1) ? 1 : factorial(n-1)*n;
}
  
console.log(factorial(10));
