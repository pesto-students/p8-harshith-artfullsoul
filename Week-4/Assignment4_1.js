
let STATE = {
    PENDING : "pending",
    FULLFILLED: "fullfilled",
    REJECTED: "rejected"
}
function CustomPromise(callBackFunc) {
    let value = null;
    let state = STATE.PENDING;
    let thenCallbacksArray = [];
    let catchCallbacksArray = [];
    
    
    let runCallbacks = () => {
        // console.log(`RUN CALLBACK CALLED value->${value} , state->${state}`);
        // console.log(`THEN CALLBACK ARRAY IS ->`,thenCallbacksArray);
        // console.log(`CATCH CALLBACK ARRAY IS ->`,catchCallbacksArray)
        
        //RUN ALL THEN CALLBACKS
        if(state === STATE.FULLFILLED)
        {
            thenCallbacksArray.forEach(callback => {
                callback(value);
            })
            thenCallbacksArray = [];
        }
        //RUN ALL CATCH CALLBACKS
        else if(state === STATE.REJECTED)
        {
            catchCallbacksArray.forEach(callback => {
                callback(value);
            })
            catchCallbacksArray = [];
        }
    }
    
    let onResolve = (val) => {
        queueMicrotask(() => {
            if(state !== STATE.PENDING) return;
            
            if(val instanceof CustomPromise)
            {
                val.then(onResolve,onReject)
                return;
            }
            // console.log("onResolve VALUE ->",val);
            value = val;
            state = STATE.FULLFILLED;
            
            runCallbacks();
        })
    }
    let onReject = (value) => {
        queueMicrotask(() => {
            if(state !== STATE.PENDING) return;
            
            if(val instanceof CustomPromise)
            {
                val.then(onResolve,onReject)
                return;
            }
            
            // console.log("onReject VALUE ->",value);
            value = val;
            state = STATE.REJECTED;
            
            runCallbacks()
        })
    }
    callBackFunc(onResolve,onReject);
    
    const thenFunc = (thenCb,catchCb) => {
        // console.log("thenCb",thenCb)
        // console.log("catchCb",catchCb)
        
        // CHAINING IS HANDELED HERE
        return new CustomPromise((resolve,reject) => { 
            thenCallbacksArray.push((result) => {
                if(thenCb == null || thenCb == undefined)
                {
                    resolve(result);
                    return;
                }
                try{
                    resolve(thenCb(result))
                }
                catch(error)
                {
                    reject(error)
                }
            })
            catchCallbacksArray.push((result) => {
                if(cathcCb == null || cathcCb == undefined)
                {
                    reject(result);
                    return;
                }
                try{
                    resolve(cathcCb(result))
                }
                catch(error)
                {
                    reject(error)
                }
            })
            // if(thenCb != null || thenCb != undefined)
            // {
            //     // console.log("THEN PROTOTYPE CREATED SUCCESSFULLY ->",thenCallbacksArray);
            //     thenCallbacksArray.push(thenCb);
            //     // console.log("thenCallbacksArray UPDATED ->",thenCallbacksArray)
            // }
            // else if(catchCb != null || catchCb != undefined)
            // {
            //     // console.log("CATHCH PROTOTYPE CREATED SUCCESSFULLY");
            //     catchCallbacksArray.push(catchCb)
            //     // console.log("catchCallbacksArray UPDATED ->",catchCallbacksArray)
            // }
            runCallbacks()
        })
        
    }
    const catchFunc = (catchCb) => {
        return thenFunc(null,catchCb);
    }
    
    return(
    {
        then: thenFunc,
        catch: catchFunc,
        finally: (cb) => {
            // console.log("FINALLY PROTOTYPE CREATED SUCCESSFULLY -> ");
            return thenFunc(result => {
                cb();
                return result
            },result => {
                cb();
                throw result
            });
        }
    })
}

const getNumber = () => {
    var result = new CustomPromise((resolve,reject) => {
        let randNum = Math.random()*1000;
        if(randNum % 5 === 0)
        {
            reject("Rejected")
        }
        else
            resolve("resolved");
    })
    result.then((res) => {
        console.log(res);
    })
    .catch((res) => {
        cosnole.log(res)
    })
}

console.time();
getNumber()
console.timeEnd();