async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(23)
        }, 1000);
    })

}

function sum(a,b,c){
    return a+b+c;
}

// IIFE
(async function main(){
    // let a=await sleep()
    // console.log(a)
    // let b=await sleep()
    // console.log(b)

    // let [x,y,rest]=[3,7,2,6,8,9,1]
    // console.log(x,y,rest)

    let obj={
        a:1,
        b:2,
        c:3
    }

    let {a,b}=obj
    console.log(a,b)

    let arr=[1,4,6]
    console.log(sum(arr[0],arr[1],arr[2]))
    console.log(sum(...arr))  // ... --> Spread operator
})()