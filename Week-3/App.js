// ASSIGNMENT 3.1 ->
function memoize(fn) {
    const map = new Map();
    return (...args) => {
      var key = args.toString();
      if (map.has(key)) return map.get(key);
      if(args.length === 1) args.push(0);
      map.set(key, fn(...args));
      return map.get(key);
    };
}
function add(a, b) {
  console.log(a,b)
  return a + b;
}
//Create a method called memoize such that:
const memoizeAdd = memoize(add);
//then calling.
console.log(memoizeAdd(100, 100)); //returns 200
console.log(memoizeAdd(100)); //returns 100
console.log(memoizeAdd(100, 200)); //returns 300
console.log(memoizeAdd(100, 100)); //returns 200


// ASSIGNMENT 3.2 ->
var obj = {
  a: 10,
  b: 20,
  add: function(){
    return this.a + this.b;
  }
};

var addFnBind = obj.add.bind({a:10,b:20});
var addFnBind2 = addFnBind.bind({a:20,b:20})
console.log(addFnBind()) //Output -> 30
console.log(addFnBind2()) //Output -> 30 (Since Value is always Bounded Once)

var addFnCall = obj.add.call({a:10,b:20});
var addFnCall2 = obj.add.call({a:20,b:20})
console.log(addFnCall); //Output -> 30
console.log(addFnCall2); //Output -> 40

var findMax = Math.max(10,20,50,4,5);
console.log(findMax); //Output -> 50

var findMaxAlt = Math.max.apply(null,[10,20,30,40,50]);
console.log(findMaxAlt) //Output->50




// ASSIGNMENT 3.4 ->
function createStack() {
  // Write your code here...
  let items = [];
  function push(val) {
    items.push(val);
  }
  function pop(val) {
    items.pop(val);
  }
  function print() {
    console.log(items);
  }
  return {
    push: push,
    pop: pop,
    print: print
  };
}
const stack = createStack();
console.log(stack);
stack.push(10);
stack.push(5);
stack.pop(); // => 5
stack.print();
console.log(stack.items); // => undefined
