/**
 * This function converts a temperature in Rankine to Celsius.
 *
 * @param {number} rankine - a temperature in Rankine
 * @return {number} the Rankine temperature converted to Celsius
 *
 * @example
 *   rankineToCelsius(100)
 */
export const rankineToCelsius = rankine => {
  if (typeof rankine !== 'number') throw new Error('Parameter is not a number.');
  return rankine * (5 / 9) - 273.15;
};

/**
 * This function converts a temperature in Rankine to Fahrenheit.
 *
 * @param {number} rankine - a temperature in Rankine
 * @return {number} the Rankine temperature converted to Fahrenheit
 *
 * @example
 *   rankineToFahrenheit(100)
 */
export const rankineToFahrenheit = rankine => {
  if (typeof rankine !== 'number') throw new Error('Parameter is not a number.');
  return rankine - 459.57;
};

/**
 * This function converts a temperature in Rankine to Kelvin.
 *
 * @param {number} rankine - a temperature in Rankine
 * @return {number} the Rankine temperature converted to Kelvin
 *
 * @example
 *   rankineToKelvin(100)
 */
export const rankineToKelvin = rankine => {
  if (typeof rankine !== 'number') throw new Error('Parameter is not a number.');
  return rankine * (5 / 9);
};
