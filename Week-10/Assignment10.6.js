// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
function recur(adj,visited,indx,curr,target,ans)
{
    if(indx == target)
    {
        let temp = [];
        for(let i=0;i<curr.length;i++)  temp.push(curr[i]);
        temp.push(indx);
        ans.push(temp);
    }
    if(visited[indx] == 0)
    {
        visited[indx] = 1;
        curr.push(indx);
        for(let i=0;i<adj[indx].length;i++)
        {
            recur(adj,visited,adj[indx][i],curr,target,ans);
        }
        curr.pop();
    }
}
function findAllPath(adj,n,src,target)
{
    let visited = [];
    for(let i=0;i<=n;i++)
        visited.push(0);
    let ans = [];
    recur(adj,visited,src,[],target,ans);
    return ans;
}

let adj = [[1,2],[3],[3],[]];
console.log(findAllPath(adj,3,0,3));