const xhrRequest = require('./xhrRequest');

describe ('AJAX with XMLHttpRequest', function (){

  xit('Makes get request', done => {
    const url = "https://reqres.in/api/products/1";
    const expectedObject = { 
      "data": 
        {
          "id": 1,
          "name": 
          "cerulean", 
          "year": 2000, 
          "color": "#98B2D1", 
          "pantone_value": "15-4020" 
        } 
    };
    var callback = function (data) {
      expect(data).toMatchObject(expectedObject);
      done();
    }
    xhrRequest.getRequest(url, callback);
  });

});;