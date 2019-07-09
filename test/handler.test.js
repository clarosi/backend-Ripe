const assert = require('chai').assert;
const { fnUnitTesting } = require('../handler');

describe('Unit Testing', () => {
  describe('getWeather()', () => {
    it(`should return an object`, async () => {
      const result = await fnUnitTesting();
      assert.isObject(result);
    });

    it(`should have a property Headline`, async () => {
      const result = await fnUnitTesting();
      assert.property(result, 'Headline');
    });

    it(`should have a property DailyForecasts`, async () => {
      const result = await fnUnitTesting();
      assert.property(result, 'DailyForecasts');
    });
  });
});
