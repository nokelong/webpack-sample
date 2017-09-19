const text = require('../build/text.json');

var Hello = function() {
   var div = document.createElement('div');
   div.textContent = text.name;
   return div;
};

module.exports = Hello;