/* There are numBottles water bottles that are initially full of water. You can exchange numExchange empty water bottles from the market with one full water bottle.

The operation of drinking a full water bottle turns it into an empty bottle.

Given the two integers numBottles and numExchange, return the maximum number of water bottles you can drink. */

var numWaterBottles = function (numBottles, numExchange) {
  let totalBottles = 0;

  while (numBottles >= numExchange) {
    let newBottles = Math.floor(numBottles / numExchange);
    let leftover = numBottles % numExchange;

    totalBottles += newBottles;
    numBottles = newBottles + leftover;
  }
  return totalBottles;
};

console.log(numWaterBottles(15, 4)); // 19
console.log(numWaterBottles(9, 3)); // 13
