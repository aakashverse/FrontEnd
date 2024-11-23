// async function getData(){
//     //simulate getting data from a server
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(455)
//         },3500)
//     })
// }

// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully


async function getData(){
    //simulate getting data from a server
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(response => response.json())
    // .then(json => console.log(json))
    let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data=await x.json()   // .json ----> return javascript object
    return data
}

async function main(){
    console.log("Loading modules")

    console.log("Load Data")

    let data=await getData()

    console.log(data)

    console.log("process data")

    console.log("task 2")
}


main()
{
    // data.then((v)=>{
    //     console.log(data)

    //     console.log("process data")
    // })   
}

//Example of fetch API

// async function getData() {
//     const url = "https://example.org/products.json";
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`Response status: ${response.status}`);
//       }
  
//       const json = await response.json();
//       console.log(json);
//     } catch (error) {
//       console.error(error.message);
//     }
//   }
  