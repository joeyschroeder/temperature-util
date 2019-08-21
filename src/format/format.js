import { TEMPERATURE_MEASUREMENTS } from '../constants/temperature-measurements';
import { TEMPERATURE_MEASUREMENT_ABBREVIATIONS } from '../constants/temperature-measurement-abbreviations';

/**
 * This function appends a temperature with the Celsius temperature measurement abbreviation.
 *
 * @param {number|string} celsius - a temperature in Celsius
 * @return {string} the Celsius temperature appended with the Celsius temperature abbreviation
 *
 * @example
 *   formatToCelsius(100)
 */
export const formatToCelsius = celsius => {
  return `${celsius} ${TEMPERATURE_MEASUREMENT_ABBREVIATIONS.CELSIUS}`;
};

/**
 * This function appends a temperature with the Fahrenheit temperature measurement abbreviation.
 *
 * @param {number|string} fahrenheit - a temperature in Fahrenheit
 * @return {string} the Fahrenheit temperature appended with the Fahrenheit temperature abbreviation
 *
 * @example
 *   formatToCelsius(100)
 */
export const formatToFahrenheit = fahrenheit => {
  return `${fahrenheit} ${TEMPERATURE_MEASUREMENT_ABBREVIATIONS.FAHRENHEIT}`;
};

/**
 * This function appends a temperature with the Kelvin temperature measurement abbreviation.
 *
 * @param {number|string} kelvin - a temperature in Kelvin
 * @return {string} the Kelvin temperature appended with the Kelvin temperature abbreviation
 *
 * @example
 *   formatToKelvin(100)
 */
export const formatToKelvin = kelvin => {
  return `${kelvin} ${TEMPERATURE_MEASUREMENT_ABBREVIATIONS.KELVIN}`;
};

/**
 * This function appends a temperature with the Rankine temperature measurement abbreviation.
 *
 * @param {number|string} rankine - a temperature in Rankine
 * @return {string} the Rankine temperature appended with the Rankine temperature abbreviation
 *
 * @example
 *   formatToRankine(100)
 */
export const formatToRankine = rankine => {
  return `${rankine} ${TEMPERATURE_MEASUREMENT_ABBREVIATIONS.RANKINE}`;
};

/**
 * This function appends a temperature with the Rankine temperature measurement abbreviation.
 *
 * @param {number|string} temperature - a temperature
 * @param {string} measurement - a temperature measurement
 * @return {string} the temperature appended with the temperature measurement abbreviation
 *
 * @example
 *   formatTemperature(100, 'celsius')
 */
export const formatTemperature = (temperature, measurement = TEMPERATURE_MEASUREMENTS.CELSIUS) => {
  if (typeof temperature !== 'number' && typeof temperature !== 'string') {
    console.error('Temperature parameter is invalid.');
    return '';
  }

  switch (measurement) {
    case TEMPERATURE_MEASUREMENTS.CELSIUS:
      return formatToCelsius(temperature);
    case TEMPERATURE_MEASUREMENTS.FAHRENHEIT:
      return formatToFahrenheit(temperature);
    case TEMPERATURE_MEASUREMENTS.KELVIN:
      return formatToKelvin(temperature);
    case TEMPERATURE_MEASUREMENTS.RANKINE:
      return formatToRankine(temperature);
    default:
      console.error('Measurement parameter is invalid.');
      return temperature;
  }
};
