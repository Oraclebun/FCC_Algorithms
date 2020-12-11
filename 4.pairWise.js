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

/** 
2. Using hashmap (object) method 
function pairwise(arr,arg){
  let map = Object.assign({});
  let indices = [];

//1. Create a map of all elements in the array
  for(let i=0; i<arr.length; i++){
    if(arr.indexOf(arg-arr[i])==-1) continue;
      map[i] = arr[i];
  }
  
//2. For each element in array, find the complement
  for(let i=0; i<arr.length; i++){
    //if map is empty, stop the loop
    if (Object.keys(map).length == 0) break;
    //complement idx is the map keys given the sum-element
    let complement = Object.keys(map).find(key => map[key] === arg-arr[i]);
    //if complement does not exist, delete the key,value pair 
    if (complement == undefined) {
      delete map[i];
      continue;
    }
    //if complement idx not in array & complement idx is not itself
    if (!indices.includes(complement) && complement!=i){
      indices.push(i); 
      indices.push(parseInt(complement));
      delete map[i];
      delete map[complement];
    }
    }
  
  return indices.reduce((a,b) => a+b,0);
}

*/
module.exports = pairwise;
