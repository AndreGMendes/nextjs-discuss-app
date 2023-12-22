/**
 * FIXME:
   */

/**
 * TODO:
   */
/**
 * 
 * 
 * EXAMPLE: Utility Functions'
 * Returns the sum of two numbers.
 *
 * @remarks
 * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
 *
 * Takes two numbers and returns their sum
 * @param a first input to sum
 * @param b second input to sum
 * @returns sum of a and b
 *
 * @beta
 */
function sum(a: number, b: number, c?: number): number {
    return (!c) ? a + b : a + b + c;
  }
  
  function multiply(a: number, b: number, c?: number): number {
   return (!c) ? a * b : a * b * c;
 }


  export {sum, multiply}