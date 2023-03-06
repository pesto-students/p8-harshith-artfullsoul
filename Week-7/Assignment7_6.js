async function solve(arr,target)
{
    return new Promise(async(resolve,reject) => {
        await arr.sort();
        let diff = null;
        let ans = null;
        for(let i =1;i<arr.length;i++)
        {
            let start = i+1, end=arr.length-1;
            while(start < end)
            {
                let sum = arr[i] + arr[start] + arr[end];
                if(diff === null || Math.abs(sum - target) < diff) 
                {
                    diff = Math.abs(target - sum)
                }
                if(sum > target)    end--;
                else if(sum < target) start++;
            }
            if(i === arr.length-1)
                resolve(diff);
        }
    })
}

// let array = [5, 10, 3, 2, 50, 80];
let array =   [-1,2,1,-4] ;


// console.log(solve(array,78));
solve(array,1)
.then((val) => console.log(val))

// TIME COMPLEXITY -> O(n^2)
// SPACE COMPLEXITY -> O(1)