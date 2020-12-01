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