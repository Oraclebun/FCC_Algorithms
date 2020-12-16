/** 
Pseudo-code:
1. Traverse through the unsorted array
2. Assign index (j) = i-1
3. While current number in unsorted array < prev number
   overwrite the current number with prev number
   Decrease index(j) & keep shifting number upwards
   (Iterate downwards with j--)
4. When current num not < jth number, insert current number in (j+1)th position
*/

function insertionSort(array) {
  // Only change code below this line
  for(let i=0; i<array.length; i++){
    let j=i-1;
    num = array[i];
    while (j>=0 && num<array[j]){
       array[j+1] = array[j];
       j--;
    }
    array[j+1]= num;
    
  }
  return array;
  // Only change code above this line
}

module.exports = insertionSort;

