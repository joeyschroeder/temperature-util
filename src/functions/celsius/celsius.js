/**
 * This function converts a temperature in Celsius to Fahrenheit.
 *
 * @param {number} celsius - a temperature in Celsius
 * @return {number} the Celsius temperature converted to Fahrenheit
 *
 * @example
 * celsiusToFahrenheit(0); // => 32
 */
export const celsiusToFahrenheit = celsius => {
  if (typeof celsius !== 'number') {
    console.error('Parameter is not a number.');
    return undefined;
  }

  return celsius * (9 / 5) + 32;
};

/**
 * This function converts a temperature in Celsius to Kelvin.
 *
 * @param {number} celsius - a temperature in Celsius
 * @return {number} the Celsius temperature converted to Kelvin
 *
 * @example
 * celsiusToKelvin(0); // => 273.15
 */
export const celsiusToKelvin = celsius => {
  if (typeof celsius !== 'number') {
    console.error('Parameter is not a number.');
    return undefined;
  }

  return celsius + 273.15;
};

/**
 * This function converts a temperature in Celsius to Rankine.
 *
 * @param {number} celsius - a temperature in Celsius
 * @return {number} the Celsius temperature converted to Rankine
 *
 * @example
 * celsiusToRankine(0); // => 491.67
 */
export const celsiusToRankine = celsius => {
  if (typeof celsius !== 'number') {
    console.error('Parameter is not a number.');
    return undefined;
  }

  return celsius * (9 / 5) + 491.67;
};
