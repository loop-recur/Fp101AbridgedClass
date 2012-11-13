require('../../support/FunctionalJS/functional').expose();
require('../../support/PreludeJS/prelude').expose();
require('../stubs');

module.exports = function(){
    
  // Exercise 1:
  // ============
  
  //+ nameOfFastestCar :: [Car] -> String
  var nameOfFastestCar = function(cars) {
    var sorted = sortBy('.horsepower', cars);
    var fastest = last(sorted);
    return fastest.name;
  }
  
  
  // Exercise 2:
  // ============
  
  //+ averageDollarValue :: [Car] -> Number
  var averageDollarValue = function(cars) {
    var values = map('.dollar_value', cars);
    return average(values);
  }
  
  
  // Exercise 3:
  // Make createTable pointfree with the help of _makeTableRow
  // ============
  
  //+ _makeTableRow :: Car -> Html
  var _makeTableRow = function(car) {
    return $('<tr>', {text: car.name});
  }
  
  //+ createTable :: [Car] -> Html
  var createTable = function(cars) {
    var rows = map(_makeTableRow, cars);
    return $('<table>').append(rows);
  }
  
  
  // Exercise 4:
  // ============
  
  //+ absurdPrices :: [Car] -> String
  var absurdPrices = function(cars) {
    var absurdCars = filter('.dollar_value >= 1000000', cars);
    var prices = map('.dollar_value', absurdCars);
    return join(', ', prices);
  }
  
  
  // Exercise 5:
  // ============
  
  //+ sanitizeNames :: [Car] -> String
  var sanitizeNames = function(cars) {
    var lowercased = map('.name.toLowerCase()', cars);
    return map(replace(/\W+/g, '_'), lowercased);
  }
      
  // Bonus:
  // compose(map(f), map(g)) == map(compose(f, g));
  // Use this information to make sanitizeNames faster
  // ============
 
 return {
   nameOfFastestCar: nameOfFastestCar,
   averageDollarValue: averageDollarValue,
   createTable: createTable,
   absurdPrices: absurdPrices,
   sanitizeNames: sanitizeNames
 } 
}