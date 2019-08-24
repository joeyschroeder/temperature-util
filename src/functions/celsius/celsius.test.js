import { celsiusToFahrenheit, celsiusToKelvin, celsiusToRankine } from './celsius';

describe('celsiusToFahrenheit', () => {
  const temperature = 0;
  const result = celsiusToFahrenheit(temperature);

  it('should convert a Celsius temperature to Fahrenheit', () => {
    expect(result).toEqual(32);
  });
});

describe('celsiusToKelvin', () => {
  const temperature = 0;
  const result = celsiusToKelvin(temperature);

  it('should convert a Celsius temperature to Kelvin', () => {
    expect(result).toEqual(273.15);
  });
});

describe('celsiusToRankine', () => {
  const temperature = 0;
  const result = celsiusToRankine(temperature);

  it('should convert a Celsius temperature to Rankine', () => {
    expect(result).toEqual(491.67);
  });
});
