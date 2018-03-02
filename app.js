const yargs = require('yargs')

const geocode = require('./geocode/geocode');

const argv = yargs.options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Adderss to be fetch weather for',
      string: true
    }
})
.help()
.alias('help', 'h')
.argv;

//console.log(argv);
//console.log(argv.a);

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
   if(errorMessage){
      console.log(errorMessage);
    }else{
      console.log(JSON.stringify(results, undefined, 2));
    }
});

//b9a32fc2ee8d8b0ab681221066380cd3
// https://api.darksky.net/forecast/[key]/[latitude],[longitude]
//https://api.darksky.net/forecast/b9a32fc2ee8d8b0ab681221066380cd3/12.9261382,77.62210910000002
