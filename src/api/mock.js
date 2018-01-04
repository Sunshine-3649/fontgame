var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');

var mock = new MockAdapter(axios);

const data = [];

mock.onGet('/item').reply(200, {
  data
});
