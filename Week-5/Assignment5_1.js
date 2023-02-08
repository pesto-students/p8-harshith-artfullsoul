

const usingPromise = async () => 
{
    const doTask1 = () => {
        return new Promise((resolve,reject) => {
            console.log("DO TASK 1");
            resolve();
        })
    }
    const doTask2 = () => {
        return new Promise((resolve,reject) => {
            console.log("DO TASK 2");
            resolve();
        })
    }
    const doTask3 = () => {
        return new Promise((resolve,reject) => {
            console.log("DO TASK 3");
            resolve();
        })
    }
    console.log("THIS IS EXECUTED USING PROMISES")
    await doTask1();
    await doTask2();
    await doTask3();
}


function* usingGenerators()
{
    const doTask1 = () => {
        console.log("DO TASK 1");
    }
    const doTask2 = () => {
        console.log("DO TASK 2");
    }
    const doTask3 = () => {
        console.log("DO TASK 3");
    }
    console.log("THIS IS EXECUTED USING Generators")
    doTask1();
    yield;
    doTask2();
    yield;
    doTask3();
    yield;
}
//Comment either one out to run code

// 1->
usingPromise(); 

// 2->
// const gen = usingGenerators();
// gen.next()
// gen.next()
// gen.next()