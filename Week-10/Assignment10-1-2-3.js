// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
class Node
{
    constructor(data,left,right)
    {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
let head = null;
function counstructTree(arr,indx)
{
    if(indx >= arr.length || arr[indx] == null)
        return null;
    return new Node(arr[indx],counstructTree(arr,2*indx+1),counstructTree(arr,2*indx+2));
}
// ASSIGNMENT 10.1
function countDepth()
{
    let q = [];
    q.push(head);
    q.push(null);
    let count = 0;
    while(q.length > 0)
    {
        let firstElement = q.shift();
        if(firstElement != null)
        {
            if(firstElement.left != null)
            q.push(firstElement.left);
            
            if(firstElement.right != null)
            q.push(firstElement.right);
        }
        else
        {
            count++;
            if(q.length > 0)
                q.push(null);
        }
    }
    return count;
}
// ASSIGNMENT 10.2
function checkBST(node)
{
    if(node == null)
    {
        return true;
    }
    let left = true,right = true;
    if(node.left != null && node.left.data > node.data)
    {
        left = false;
    }
    if(node.right != null && node.right.data < node.data)
    {
        right = false;
    }
    return left&&right&&checkBST(node.left)&&checkBST(node.right);
}
// ASSIGNMENT 10.3
function levelOrderTraversal()
{
    let q = [];
    q.push(head);
    q.push(null);
    let arr2 = [];
    let indx = 0;
    while(q.length > 0)
    {
        let firstElement = q.shift();
        if(firstElement != null)
        {
            if(arr2.length == indx)    arr2.push([]);
            arr2[indx].push(firstElement.data);
            if(firstElement.left != null)
            q.push(firstElement.left);
            
            if(firstElement.right != null)
            q.push(firstElement.right);
        }
        else
        {
            indx++;
            if(q.length > 0)
                q.push(null);
        }
    }
    return arr2;
}
// let arr =  [3,9,20,null,null,15,7];
let arr =  [2,1,3,null,null,null,4];
head = counstructTree(arr,0);
// ASSIGNMENT 10.1
console.log(countDepth());
// ASSIGNMENT 10.2
console.log(levelOrderTraversal());
// ASSIGNMENT 10.3
console.log(checkBST(head));