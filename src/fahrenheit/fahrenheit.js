/**
 * This function converts a temperature in Fahrenheit to Celsius.
 *
 * @param {number} fahrenheit - a temperature in Fahrenheit
 * @return {number} the Fahrenheit temperature converted to Celsius
 *
 * @example
 *   fahrenheitToCelsius(100)
 */
export const fahrenheitToCelsius = fahrenheit => {
  if (typeof fahrenheit !== 'number') {
    console.error('Parameter is not a number.');
    return undefined;
  }

  return (fahrenheit - 32) * (5 / 9);
};

/**
 * This function converts a temperature in Fahrenheit to Kelvin.
 *
 * @param {number} fahrenheit - a temperature in Fahrenheit
 * @return {number} the Fahrenheit temperature converted to Kelvin
 *
 * @example
 *   fahrenheitToKelvin(100)
 */
export const fahrenheitToKelvin = fahrenheit => {
  if (typeof fahrenheit !== 'number') {
    console.error('Parameter is not a number.');
    return undefined;
  }

  return (fahrenheit + 459.67) * (5 / 9);
};

/**
 * This function converts a temperature in Fahrenheit to Rankine.
 *
 * @param {number} fahrenheit - a temperature in Fahrenheit
 * @return {number} the Fahrenheit temperature converted to Rankine
 *
 * @example
 *   fahrenheitToRankine(100)
 */
export const fahrenheitToRankine = fahrenheit => {
  if (typeof fahrenheit !== 'number') {
    console.error('Parameter is not a number.');
    return undefined;
  }

  return fahrenheit + 459.67;
};
