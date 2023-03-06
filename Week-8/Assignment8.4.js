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

function solve(str)
{
    var stack = new Stack();
    for(let i =0;i<str.length;i++)
    {
        let ch = str.charAt(i);
        if(ch == "{" ||ch ==  "(" ||ch == "[")
        {
            stack.push(ch);
        }
        
        if(ch == "}")
        {
            if(stack.peek() === "{")
                stack.pop();
            else
                return false
        }
        if(ch == "]")
        {
            if(stack.peek() === "[")
                stack.pop();
            else
                return false
        }
        if(ch == ")")
        {
            if(stack.peek() === "(")
                stack.pop();
            else
                return false
        }
    }
    return true;
}

let string = "{([])}";
console.log(solve(string));