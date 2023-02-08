
function solve(arr)
{
    let newArray = [];
    let left = 0,right=arr.length-1,top=0,bottom=arr.length-1;
    let direction = 0;
    while(left <= right && top <= bottom)
    {
        if(direction == 0)
        {
            for(let i=left ; i <= right ; i++)
                newArray.push(arr[top][i]);
            top = top + 1;
            direction = 1;
        }
        else if(direction == 1)
        {
            for(let i=top ; i <= bottom ; i++)
                newArray.push(arr[i][right]);
            right = right - 1;
            direction = 2;
        }
        else if(direction == 2)
        {
            for(let i=right ; i >= left ; i--)
                newArray.push(arr[bottom][i]);
            bottom = bottom - 1;
            direction = 3;
        }
        else if(direction == 3)
        {
            for(let i=bottom ; i >= top ; i--)
                newArray.push(arr[i][left]);
            left = left + 1;
            direction = 0;
        }
    }
    return newArray;
}

// let array = [1, 2, 3, 4, -10];
let array =  [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];


console.log(solve(array));


// TIME COMPLEXITY -> O(n*m)
// SPACE COMPLEXITY -> O(n*m)