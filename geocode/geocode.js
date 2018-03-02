const request = require('request');

var geocodeAddress = (address, callback) => {

    var encodeAddress=encodeURIComponent(address);
    //console.log(encodeAddress);
    // var geoURL= `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`;
    // console.log(geoURL);

    request({
      url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
      json: true
    },(error, response, body) => {
      if (error){
        callback(`Unable to connect to the server.`);
      }else if(body.status === 'ZERO_RESULTS'){
        callback('Unable to find that address.');
      }else if(body.status === 'OK'){
        callback(undefined,{
          Address: body.results[0].formatted_address,
          Latitude: body.results[0].geometry.location.lat,
          Longitude: body.results[0].geometry.location.lng
        });
      }
    });
}

module.exports.geocodeAddress = geocodeAddress;
