function solve(arr)
{
    let min = null, maxProfit = 0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i] < min || min === null)
        {
            min = arr[i];
        }
        let currProfit = arr[i] - min;
        if(maxProfit < currProfit)
        {
            maxProfit = currProfit;
        }
    }
    return maxProfit;
}

let array = [7,6,4,3,1];
// let array =   [7,1,5,3,6,4];


console.log(solve(array));


// TIME COMPLEXITY -> O(n)
// SPACE COMPLEXITY -> O(1)