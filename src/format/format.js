/**
 * This function appends a temperature with the Celsius temperature measurement abbreviation.
 *
 * @param {number} celsius - a temperature in Celsius
 * @return {string} the Celsius temperature appended with the Celsius temperature abbreviation
 *
 * @example
 *   formatToCelsius(100)
 */
export const formatToCelsius = celsius => {
  return `${celsius} °C`;
};

/**
 * This function appends a temperature with the Fahrenheit temperature measurement abbreviation.
 *
 * @param {number} fahrenheit - a temperature in Fahrenheit
 * @return {string} the Fahrenheit temperature appended with the Fahrenheit temperature abbreviation
 *
 * @example
 *   formatToCelsius(100)
 */
export const formatToFahrenheit = fahrenheit => {
  return `${fahrenheit} °F`;
};

/**
 * This function appends a temperature with the Kelvin temperature measurement abbreviation.
 *
 * @param {number} kelvin - a temperature in Kelvin
 * @return {string} the Kelvin temperature appended with the Kelvin temperature abbreviation
 *
 * @example
 *   formatToKelvin(100)
 */
export const formatToKelvin = kelvin => {
  return `${kelvin} K`;
};

/**
 * This function appends a temperature with the Rankine temperature measurement abbreviation.
 *
 * @param {number} rankine - a temperature in Rankine
 * @return {string} the Rankine temperature appended with the Rankine temperature abbreviation
 *
 * @example
 *   formatToRankine(100)
 */
export const formatToRankine = rankine => {
  return `${rankine} °R`;
};
