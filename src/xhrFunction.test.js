const xhrExample = require('./xhrFunction');

describe ('Xmlhttprequest tester', function (){

  it('Makes get request', () => {
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
    function callback(data) {
      expect(data).toEqual(expectedObject);
      done();
    }
    xhrExample(url, callback);
  });

});;