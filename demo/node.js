var vchatjs = require('../dist/vchatjs');

console.log('Capitalize: ' + vchatjs.capitalize('steven'));
console.log('Slugify: ' + vchatjs.slugify('Call of Duty: Ghosts'));
console.log('Camelize:' + vchatjs.camelize('my little pony'));
console.log('Random Number: ' + vchatjs.random(0,100));
console.log('Library Version: ' + vchatjs.VERSION);