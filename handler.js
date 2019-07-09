const axios = require('axios');

('use strict');

const getData = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        'http://dataservice.accuweather.com/forecasts/v1/daily/1day/262768?apikey=wYGUtqz24FG275tOvhbyC1OxxiiiWOtl'
      )
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
};

module.exports.fnUnitTesting = () => {
  return getData();
};

module.exports.getWeather = async () => {
  const result = await getData();
  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(result)
  };
};
