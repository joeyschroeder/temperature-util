/**
 * This function converts a temperature in Kelvin to Celsius.
 *
 * @param {number} kelvin - a temperature in Kelvin
 * @return {number} the Kelvin temperature converted to Celsius
 *
 * @example
 * kelvinToCelsius(100); // => -173.15
 */
export const kelvinToCelsius = kelvin => {
  if (typeof kelvin !== 'number') {
    console.error('Parameter is not a number.');
    return undefined;
  }

  return kelvin - 273.15;
};

/**
 * This function converts a temperature in Kelvin to Fahrenheit.
 *
 * @param {number} kelvin - a temperature in Kelvin
 * @return {number} the Kelvin temperature converted to Fahrenheit
 *
 * @example
 * kelvinToFahrenheit(100); // => -279.67
 */
export const kelvinToFahrenheit = kelvin => {
  if (typeof kelvin !== 'number') {
    console.error('Parameter is not a number.');
    return undefined;
  }

  return kelvin * (9 / 5) - 459.67;
};

/**
 * This function converts a temperature in Kelvin to Rankine.
 *
 * @param {number} kelvin - a temperature in Kelvin
 * @return {number} the Kelvin temperature converted to Rankine
 *
 * @example
 * kelvinToRankine(100); // => 180
 */
export const kelvinToRankine = kelvin => {
  if (typeof kelvin !== 'number') {
    console.error('Parameter is not a number.');
    return undefined;
  }

  return kelvin * (9 / 5);
};
