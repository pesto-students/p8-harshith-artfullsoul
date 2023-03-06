
function solve(arr)
{
    let newArray = [];
    let count0 = 0, count1 = 0, count2 = 0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i] === 0)   
            count0++;
        else if(arr[i] === 1)
            count1++;
        else if(arr[i] === 2)
            count2++;
    }
    for(let i=0;i<count0;i++)
        newArray.push(0);
    for(let i=0;i<count1;i++)
        newArray.push(1);
    for(let i=0;i<count2;i++)
        newArray.push(2);
    return newArray;
}

// let array = [1, 2, 3, 4, -10];
let array =  [ 0,1,1,0,2,2,2];


console.log(solve(array));

// TIME COMPLEXITY -> O(n)
// SPACE COMPLEXITY -> O(n))