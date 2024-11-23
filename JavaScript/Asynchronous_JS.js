                           /*Shradha Khapra JS-series*/
                    /*covers Callbacks,Promises & Async-await*/

//Asynchronous nature of JS

/*console.log("one")
console.log("two")

setTimeout(()=>{
    console.log("AKASH")
},2000);

console.log("three")
console.log("four")*/

//Callbacks
//Example of Synchronous callback
// function sum(a,b){
//     console.log(a+b);
// }

// function Calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }

// Calculator(2,1,sum);  // passing sum funcn without () in callbacks

//Example of Asynchronous callback
// const hello=()=>{
//     console.log("hello")
// }

// setTimeout(hello,3000)

//Callback Hell-->solved by Promise chain
function getData(DataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data",DataId)
            resolve("success")
        },2000);
    })
}

//by-Async-await
async function getAllData(){
    //console.log("fetching Data1...")
    await getData(1);
    //console.log("fetching Data2...")
    await getData(2);
    //console.log("fetching Data3...")
    await getData(3);
}

// //Callback hell
// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4);
//         })
//     })
// })

//Promise Chain --> a way to solve the problem of callback hell (still not a better way)
// console.log("fetching Data1....")
// getData(1)
// .then((res)=>{
//     console.log("fetching Data2....")
//     return getData(2)
// })
// .then((res)=>{
//     console.log("fetching Data3....")
//     return getData(3)
// })
// .then((res)=>{
//     console.log("fetching Data4....")
//     return getData(4)
// })

//Promise
// function getData(DataId,getNextData){
//     // console.log("I am a Promise")
//     //resolve("01")
//     //reject("some error occured")
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         //console.log("Data",DataId)
//         //resolve("success")
//         reject("error")
//         if(getNextData){
//             getNextData();
//         }
//         },2000);
//     }); 
// };

// const getPromise= ()=> {
//     return new Promise((resolve,reject)=>{
//         console.log("I am a promise")
//         //resolve("success")
//         reject("error")
//     });
// };

// let promise=getPromise();
// promise.then((res)=>{
//     console.log("promise fulfilled",res)
// })

// promise.catch((err)=>{
//     console.log("rejected",err)
// })

// function asyncFunction1(){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         console.log("Data1")
//         resolve("success")
//        },4000)
//     })
// };

// function asyncFunction2(){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         console.log("Data2")
//         resolve("success")
//        },4000)
//     })
// };

// console.log("fetching Data1....")
// asyncFunction1().then((res)=>{
//     console.log("fetching Data2....")
// asyncFunction2().then((res)=>{})
// })

// Async-await//
// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Weather Data")
//             resolve(200)       // in web --> 200 represents success
//         },2000)
//     });
// }

// async function getWeatherData(){
//     await api();  // 1st
//     await api();  // 2nd
// }