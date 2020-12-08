function pairwise(arr, arg) {
  let copy = [...arr]; //make a copy of the array
  let sum=0; //sum of indices

  for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
      if (copy[i]+copy[j]==arg){ //if sum of elements = arg
        copy[i]= NaN; //null already used element
        copy[j] = NaN;
        sum = sum+i+j;
      }
    }
  }
  
  return sum;
}

module.exports = pairwise;
