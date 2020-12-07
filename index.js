const sym = require("./1.findSymmetricDifferences");
console.log(sym([1, 2, 5], [2, 3, 5], [ 3, 4, 5]));

const updateInventory = require("./2.updateInventory");
// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];
updateInventory(curInv, newInv);

const permAlone = require("./3.noRepeatsPlease");
//permAlone("aab"); //should return 2.
//permAlone("aaa"); //should return 0.
//permAlone("abcdefa"); //should return 3600.
//permAlone("abfdefa"); //should return 2640.
//permAlone("zzzzzzzz")); //should return 0.
//permAlone("a"); //should return 1.
//permAlone("aaab"); //should return 0.
permAlone("aaabb"); //should return 12.
