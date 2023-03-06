// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function solve(arr)
{
    let totalSum = 0,maxSum=null;
    for(let i=0;i<arr.length;i++)
    {
        totalSum += arr[i];
        if(totalSum < 0)
        {
            totalSum = 0;
        }
        else if(totalSum > maxSum || maxSum === null)
        {
            maxSum = totalSum;
        }
    }
    return maxSum;
}

// let array = [1, 2, 3, 4, -10];
let array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];


console.log(solve(array));

// TIME COMPLEXITY -> O(n)
// SPACE COMPLEXITY -> O(1)