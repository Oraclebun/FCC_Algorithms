//1. Using Heap's Algorithm, generate all permutation of a string

function permAlone(str){
let regex = /(.)\1+/gi;

const swap = (arr, indx1, indx2) => {
  if(indx2%2==0) indx1=0;
  //save arr[indx1] into temp
  let temp = arr[indx1];
  //pass arr[idx2] to arr[idx1]
  arr[indx1] = arr[indx2];
  arr[indx2] = temp;
}

const generatePermutations = (inputArr, callback) =>{
  const arr = [...inputArr];
  (function generateNext(lastIdx){
    if(lastIdx===0) callback(arr)
    else{
      for(let idx=0; idx<lastIdx; idx++){
        generateNext(lastIdx-1);
        swap(arr,idx,lastIdx)
      }
      generateNext(lastIdx-1);
    }
  }(arr.length-1))
}

//the callback function is x.join('') - join back the characters split into array (after swapping)
let result = []
generatePermutations(str, x=> {
  result=[...result, x.join('')]
  });

//2. Use regex to filter out capturing groups with repeated characters

return result.filter( each => {
    return !each.match(regex);
  }).length;

}

module.exports = permAlone;
