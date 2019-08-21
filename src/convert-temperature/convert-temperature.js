import { TEMPERATURE_MEASUREMENTS } from '../constants/temperature-measurements';
import { celsiusToFahrenheit, celsiusToKelvin, celsiusToRankine } from '../celsius/celsius';
import { fahrenheitToCelsius, fahrenheitToKelvin, fahrenheitToRankine } from '../fahrenheit/fahrenheit';
import { kelvinToCelsius, kelvinToFahrenheit, kelvinToRankine } from '../kelvin/kelvin';
import { rankineToCelsius, rankineToFahrenheit, rankineToKelvin } from '../rankine/rankine';

/**
 * This function converts a temperature from one measurement to another.
 *
 * @param {number} value - a temperature
 * @param {string} fromMeasurement - the temperature measurement of the value param
 * @param {number} toMeasurement - the target temperature measurement
 * @return {number} the value param converted from the fromMeasurement param to the toMeasurement param
 *
 * @example
 *   convertTemperature(100, 'celsius', 'fahrenheit');
 */
export const convertTemperature = (
  temperature,
  fromMeasurement = TEMPERATURE_MEASUREMENTS.CELSIUS,
  toMeasurement = TEMPERATURE_MEASUREMENTS.FAHRENHEIT
) => {
  if (typeof temperature !== 'number') {
    console.error('Temperature is not a number.');
    return undefined;
  }

  switch (fromMeasurement) {
    case TEMPERATURE_MEASUREMENTS.CELSIUS:
      switch (toMeasurement) {
        case TEMPERATURE_MEASUREMENTS.FAHRENHEIT:
          return celsiusToFahrenheit(temperature);
        case TEMPERATURE_MEASUREMENTS.KELVIN:
          return celsiusToKelvin(temperature);
        case TEMPERATURE_MEASUREMENTS.RANKINE:
          return celsiusToRankine(temperature);
        default:
          console.error('To measurement is invalid.');
          return temperature;
      }
    case TEMPERATURE_MEASUREMENTS.FAHRENHEIT:
      switch (toMeasurement) {
        case TEMPERATURE_MEASUREMENTS.CELSIUS:
          return fahrenheitToCelsius(temperature);
        case TEMPERATURE_MEASUREMENTS.KELVIN:
          return fahrenheitToKelvin(temperature);
        case TEMPERATURE_MEASUREMENTS.RANKINE:
          return fahrenheitToRankine(temperature);
        default:
          console.error('To measurement is invalid.');
          return temperature;
      }
    case TEMPERATURE_MEASUREMENTS.KELVIN:
      switch (toMeasurement) {
        case TEMPERATURE_MEASUREMENTS.CELSIUS:
          return kelvinToCelsius(temperature);
        case TEMPERATURE_MEASUREMENTS.FAHRENHEIT:
          return kelvinToFahrenheit(temperature);
        case TEMPERATURE_MEASUREMENTS.RANKINE:
          return kelvinToRankine(temperature);
        default:
          console.error('To measurement is invalid.');
          return temperature;
      }
    case TEMPERATURE_MEASUREMENTS.RANKINE:
      switch (toMeasurement) {
        case TEMPERATURE_MEASUREMENTS.CELSIUS:
          return rankineToCelsius(temperature);
        case TEMPERATURE_MEASUREMENTS.FAHRENHEIT:
          return rankineToFahrenheit(temperature);
        case TEMPERATURE_MEASUREMENTS.KELVIN:
          return rankineToKelvin(temperature);
        default:
          console.error('To measurement is invalid.');
          return temperature;
      }
    default:
      console.error('From measurement is invalid.');
      return temperature;
  }
};
