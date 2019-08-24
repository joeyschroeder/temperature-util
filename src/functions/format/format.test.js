import { formatToCelsius, formatToFahrenheit, formatToKelvin, formatToRankine, formatTemperature } from './format';
import { TEMPERATURE_MEASUREMENT_ABBREVIATIONS } from '../constants/temperature-measurement-abbreviations';
import { TEMPERATURE_MEASUREMENTS } from '../constants/temperature-measurements';

describe('formatToCelsius', () => {
  const temperature = 0;
  const result = formatToCelsius(temperature);

  it('should append temperature with Celsius abbreviation', () => {
    expect(result).toEqual(`${temperature} ${TEMPERATURE_MEASUREMENT_ABBREVIATIONS.CELSIUS}`);
  });
});

describe('formatToFahrenheit', () => {
  const temperature = 0;
  const result = formatToFahrenheit(temperature);

  it('should append temperature with Fahrenheit abbreviation', () => {
    expect(result).toEqual(`${temperature} ${TEMPERATURE_MEASUREMENT_ABBREVIATIONS.FAHRENHEIT}`);
  });
});

describe('formatToKelvin', () => {
  const temperature = 0;
  const result = formatToKelvin(temperature);

  it('should append temperature with Kelvin abbreviation', () => {
    expect(result).toEqual(`${temperature} ${TEMPERATURE_MEASUREMENT_ABBREVIATIONS.KELVIN}`);
  });
});

describe('formatToRankine', () => {
  const temperature = 0;
  const result = formatToRankine(temperature);

  it('should append temperature with Rankine abbreviation', () => {
    expect(result).toEqual(`${temperature} ${TEMPERATURE_MEASUREMENT_ABBREVIATIONS.RANKINE}`);
  });
});

describe('formatTemperature', () => {
  const temperature = 0;
  const result = formatTemperature(temperature, TEMPERATURE_MEASUREMENTS.CELSIUS);

  it('should append temperature with abbreviation', () => {
    expect(result).toEqual(formatToCelsius(temperature));
  });
});
