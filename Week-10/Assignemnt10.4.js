// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function find(parent,x)
{
    if(parent[x] == x)  return x;
    return find(parent,parent[x])
}
function union(a,b,parent,rank)
{
    let parentOfA = find(parent,a);
    let parentOfB = find(parent,b);
    if(parentOfA == parentOfB)
        return;
    else
    {
        if(rank[parentOfA] < rank[parentOfB])
        {
            parent[parentOfA] = parentOfB;
        }
        else if(rank[parentOfA] < rank[parentOfB])
        {
            parent[parentOfB] = parentOfA;
        }
        else
        {
            parent[parentOfB] = parentOfA;
            rank[parentOfA] = rank[parentOfA]+1;
        }
    }
}
function checkUnion(a,b,parent)
{
    return find(parent,a)==find(parent,b);
}
function check(edges,v,src,dst)
{
    let parent=[],rank=[];
    for(let i=0;i<v;i++)
    {
        parent[i] = i;
        rank[i] = 1;
    }
    for(let i=0;i<edges.length;i++)
    {
        console.log(parent)
        union(edges[i][0],edges[i][1],parent,rank);
    }
    return checkUnion(src,dst,parent);
}
let edges = [[0,1],[0,2],[3,5],[5,4],[4,3]];
console.log(check(edges,6,0,2))