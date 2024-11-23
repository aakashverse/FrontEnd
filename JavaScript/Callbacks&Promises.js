console.log("Akash is a hacker");
console.log("Vikas is a hecker");

//Asynchronous function --> run later
setTimeout(()=>{
    console.log("I am inside settimeout");
},2000);

console.log("Shiv is Good man");

const fn=()=>{
    console.log("Nothing")
}

const callback =(arg,fn)=>{
    console.log(arg)
    fn()
}

const loadScript=(src,callback)=>{
    let sc=document.createElement("script")
    sc.src=src;
    sc.onload=callback("Akash",fn)
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)

let prom1=new Promise((resolve,reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("No random was not supporting you")
    }
    else{
        setTimeout(()=>{
            console.log("Yes I am done")
            resolve("Akash 1")
        },3000)
    }
})

let prom2=new Promise((resolve,reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("No random was not supporting you")
    }
    else{
        setTimeout(()=>{
            console.log("Yes I am done 2")
            resolve("Akash 2")
        },1000)
    }
})

// prom1.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })

let p3=Promise.resolve([prom1,prom2])
p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err)
})