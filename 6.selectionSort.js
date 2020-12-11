/** Pseudo-code 
 * 1. Traverse through the array
 * 2. set min as the current element.
 * 3. Traverse through the remaining elements (not including the current elements)
 * 4. Find the minimum element (or index)
 * 5. swap the current element with the minimum element
*/

function selectionSort(array) {
  // Only change code below this line
  let temp;
  for(let i=0; i<array.length; i++){
    let minIdx = i;
    for(let j=i+1; j<array.length; j++){
      if(array[minIdx]>array[j]){
        minIdx=j;
      } 
    }
    //swap the min element with current element before next iteration;
    temp = array[i];
    array[i] = array[minIdx];
    array[minIdx]=temp;
  }
  
  return array;
  // Only change code above this line
}

module.exports = selectionSort;