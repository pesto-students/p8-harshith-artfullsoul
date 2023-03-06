function solve(arr,b)
{
    let map = new Map();
    let found = 0;
    for(let i=0;i<arr.length;i++)
    {
       map.set(arr[i],1);
    }
    for(let i=0;i<arr.length;i++)
    {
         if(map.has(b+arr[i]))
         {
           found = 1;
           break;
         }
    }
    return found;
}

// let array = [5, 10, 3, 2, 50, 80];
let array =   [-10, 20] ;


// console.log(solve(array,78));
console.log(solve(array,30));


// TIME COMPLEXITY -> O(n)
// SPACE COMPLEXITY -> O(n)