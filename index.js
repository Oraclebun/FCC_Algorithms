/**Algorithms: 
 * 1. Find the Symmetric DifferencePassed */
function sym(args) {
  let argv = [...arguments];
  let setOfTwo=argv[0];
  function sym2(a,b){
  let result = b.filter(x => {
    return !a.includes(x);
  }).concat(a.filter(el =>{
    return !b.includes(el);
  }));
  return [...new Set(result)];
}

for (let i=0; i<argv.length-1; i++){
    setOfTwo = sym2(setOfTwo, argv[i+1])
  }
  return setOfTwo;

}

sym([1, 2, 5], [2, 3, 5], [ 3, 4, 5]);

/** 2. Inventory Update */
function updateInventory(arr1, arr2) {
    let obj = Object.assign({});
    
    for (let items of arr1){
        obj[items[1]]=items[0];
    }
    for (let items of arr2){
        if(items[1]in obj){
            obj[items[1]]=items[0]+obj[items[1]]
        } else {
            obj[items[1]]=items[0];
        }
    }
    arr1 = Object.keys(obj).sort().map((key) => [obj[key],key]);
    
    return arr1;
}

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