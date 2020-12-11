/** Explanation: Bubble Sort
 * Traverse the array concurrently 
 * compare 2 neighbouring elements
 * if the later element is smaller,
 * swap the elements.   
*/
function bubbleSort(array) {
  // Only change code below this line
  for (let i=0; i<array.length; i++){
    for(let j=i+1; j<array.length; j++){
      let temp = array[i];
      if (array[i]>array[j]){
        array[i] = array[j]; //swap it
        array[j] = temp;
      }
    }
  }

  return array;
  // Only change code above this line
}

module.exports = bubbleSort;
