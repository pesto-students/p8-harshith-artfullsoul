function findJudge(edges,v)
{
    let arr = [];
    for(let i=0;i<=v;i++)
    {
        for(let j=0;j<=v;j++)
        {
            if(i == arr.length) arr.push([])
            arr[i][j] = 0;
        }
    }
    for(let i=0;i<edges.length;i++)
    {
        arr[edges[i][1]][edges[i][0]] = 1;
    }
    console.log(arr)
    for(let i=1;i<=v;i++)
    {
        let found = 1;
        for(let j=1;j<=v;j++)
        {
            if(arr[i][j] == 0 && i!=j)
            {
                found = 0;
            }
        }
        if(found == 1)  return i;
    }
}
let edges = [[1,3],[2,3]]
console.log(findJudge(edges,3))