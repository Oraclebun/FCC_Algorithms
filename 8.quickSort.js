//3 way quick sort
function quickSort(array) {
  // Only change code below this line
  //pick last element as pivot

if (!array || !array.length) {
    return [];
}
  let lesser = [];
  let greater = [];
  let pivots = [];
  
  let pivot = array[array.length-1];

  for(let x of array){
    if (x === pivot){
      pivots.push(x);
    }
  }
  
  for(let x of array){
    if(x<pivot){
    lesser.push(x);
    }
  }
  
  let lesser1 = quickSort(lesser);

  for(let x of array){
    if(x>pivot){
    greater.push(x);
    }
  }
  
  let greater1 = quickSort(greater);
  
  //array = lesser1.concat(pivots).concat(greater1);
  array = [...lesser1,...pivots,...greater1];
  
  return array;
  // Only change code above this line
}


module.exports= quickSort;