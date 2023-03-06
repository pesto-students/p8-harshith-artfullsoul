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
class Queue
{
    constructor()
    {
        
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }
    push(data)
    {
     this.stack1.push(data)
    }
    peek()
    {
        while(!this.stack1.isEmpty())
        {
            this.stack2.push(this.stack1.pop());
        }
        let temp = this.stack2.peek();
        while(!this.stack2.isEmpty())
        {
            this.stack1.push(this.stack2.pop());
        }
        return temp;
    }
    pop()
    {
        while(!this.stack1.isEmpty())
        {
            this.stack2.push(this.stack1.pop());
        }
        let temp = this.stack2.pop();
        while(!this.stack2.isEmpty())
        {
            this.stack1.push(this.stack2.pop());
        }
        return temp;
    }
    isEmpty()
    {
        return this.stack1.isEmpty();
    }
}
let qu = new Queue();
qu.push(2);
qu.push(3);
qu.push(4);
console.log(qu.pop())
console.log(qu.pop())