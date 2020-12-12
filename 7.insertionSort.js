function insertionSort(array) {
  // Only change code below this line
  for(let i=0; i<array.length; i++){
    j=i-1;
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

