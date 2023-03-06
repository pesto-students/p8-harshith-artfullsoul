// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
class Node
{
    // let data = null;
    // let next = null;
    constructor(data)
    {
        this.data = data;
        this.next = null;
    }
}
let head = null;
function createNode(data)
{
    let newNode = new Node(data);
    if(head == null)
    {
        head = newNode;
    }
    else
    {
        
        let temp = head;
        while(temp.next != null)
        {
            temp = temp.next;
        }
        temp.next = newNode;
    }
}
function printNode()
{
    let temp = head;
    while(temp != null)
    {
        console.log("Node Value is -> "+temp.data);
        temp = temp.next;
    }
}
// ASSIGNMENT 7.1
function reverse()
{
    let temp = head.next;
    let prev = head;
    prev.next = null;
    while(temp != null)
    {
        let tempNext = temp.next;
        temp.next = prev;
        prev = temp;
        temp = tempNext;
    }
    head = prev;
}
// ASSIGNMENT 7.2
function rotateLinkedList(k)
{
    if(k == 0)
        return;
    let temp = head;
    let tempKth = null;
    while(temp.next !== null)
    {
        if(k === 1 && tempKth === null)
         tempKth = temp;
        else
            k--;
        temp = temp.next;
    }
    temp.next = head
    head = tempKth.next;
    tempKth.next = null;
}
// ASSIGNMENT 7.3
function makeLinkedListCircular()
{
    let temp = head;
    let temp2 = null;
    while(temp.next != null)
    {
        if(temp.data==3)
        {
            temp2 = temp;
        }
        temp=temp.next;
    }
    temp.next = temp2;
}
function detectCycle()
{
    let t = head.next;
    let r = head.next.next;
    while(t!=r)
    {
        t =t.next;
        r=r.next.next;
        if(r==t)
        console.log("Linked List is Circular!!")
    }
}
// createNode(2);
// createNode(4);
// createNode(7);
// createNode(8);
// createNode(9);
// reverse();
// rotateLinkedList(3);

createNode(1);
createNode(3);
createNode(4);
makeLinkedListCircular()
detectCycle()

// printNode();