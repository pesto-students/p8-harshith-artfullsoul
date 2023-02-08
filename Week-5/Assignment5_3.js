
const hasDuplicates = (arr) => {
    let set = new Set(arr);
    return (set.size === arr.length) ? true : false;
}

var arr = [10,20,30,30,40];
var arr2 = [10,20,30,40,50];

console.log(hasDuplicates(arr));
console.log(hasDuplicates(arr2));