class Stack
{
    constructor()
    {
        this.items = [];
    }
    push(element)
    {
        this.items.push(element);
    }
    pop()
    {
        // return top most element in the stack
        // and removes it from the stack
        // Underflow if stack is empty
        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }
    peek()
    {
        // return the top most element from the stack
        // but does'nt delete it.
        return this.items[this.items.length - 1];
    }
    isEmpty()
    {
        return this.items.length == 0;
    }
}
function solve(arr)
{
    var stack = new Stack();
    for(i=arr.length-1;i>=0;i--)
    {
        if(stack.isEmpty())
        {
            stack.push(arr[i]);
            arr[i] = -1;
        }
        else
        {
            let temp = arr[i]
            while(!stack.isEmpty())
            {
                if(stack.peek() > arr[i])
                {
                    arr[i] = stack.peek();
                    break;
                }
                else
                {
                    stack.pop();
                    if(stack.isEmpty())
                    arr[i] = -1;
                }
            }
            stack.push(temp);
        }
    }
    return arr;
}

let arr = [1,3,2,4];
// let arr = [6,8,0,1,3];
console.log(solve(arr));