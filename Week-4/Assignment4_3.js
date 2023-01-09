var fib = (n) => ({
    [Symbol.iterator]()
    {
        let first=null,second=null;
        return {
            next : () => {
                if(first == null 
                && (first+second) <= n)
                {
                    first = 0;
                     return {
                        value:0,
                        done:false
                    }
                }
                else if(first != null && second == null && (first+second) <= n)
                {
                    second = 1;
                     return {
                        value:1,
                        done:false
                    }
                }
                else if((first+second) <= n)
                {
                    var temp = first+second;
                    first = second;
                    second = temp;
                    return {
                        value:temp,
                        done:false
                    }
                }
                else
                {
                    return {
                        value:null,
                        done:true
                    }
                }
            }
        }
    }
})

for (let el of fib(10))
{
    console.log("ELEMENT IS -> "+el);
}
