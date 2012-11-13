require('../../support/FunctionalJS/functional').expose();
require('../../support/PreludeJS/prelude').expose();
require('../stubs');

module.exports = function() {
  
  // Exercise 1:
  // ============
  
  //+ nameOfFastestCar :: [Car] -> String
  var nameOfFastestCar = compose('.name', last, sortBy('.horsepower'));
  
  
  // Exercise 2:
  // ============
    
  //+ averageDollarValue :: [Car] -> Number
  var averageDollarValue = compose(average, map('.dollar_value'));
  
  
  // Exercise 3:
  // Make createTable pointfree with the help of _makeTableRow
  // ============
  
  //+ _makeTableRow :: Car -> Html
  var makeTableRow = function(car) {
    return $('<tr>', {text: car.name});
  }
  
  //+ createTable :: [Car] -> Html
  var createTable = compose($('<table>').append, map(makeTableRow));
  
  
  // Exercise 4:
  // ============
  
  //+ absurdPrices :: [Car] -> String
  var absurdPrices = compose(join(', '),
                             map('.dollar_value'),
                             filter('.dollar_value >= 1000000'));
  
  
  // Exercise 5:
  // ============
   
  //+ sanitizeNames :: [Car] -> String
  var sanitizeNames = compose(map(replace(/\W+/g, '_')),
                              map('.name.toLowerCase()'));
  
  
  // Bonus:
  // ============
  
  //+ sanitizeNames :: [Car] -> String
  var sanitizeNames = map(compose(replace(/\W+/g, '_'), '.name.toLowerCase()'));
  
  
  return {
    nameOfFastestCar: nameOfFastestCar,
    averageDollarValue: averageDollarValue,
    createTable: createTable,
    absurdPrices: absurdPrices,
    sanitizeNames: sanitizeNames
  }
}
