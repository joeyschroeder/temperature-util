import { convertTemperature } from './convert-temperature';

describe('convertTemperature', () => {
  const temperature = 0;
  const result = convertTemperature(temperature);

  it('should append convert the temperature from one measurement to another', () => {
    expect(result).toEqual(32);
  });
});
