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

module.exports = updateInventory