let URL="https://cat-fact.herokuapp.com/facts";
const CatFact=document.querySelector("#fact");

const btn=document.querySelector("#btn")


let getFacts= async()=>{
    console.log("getting data...")
    let response= await fetch(URL); 
    console.log(response)  //JSON Format
    let data=await response.json()
    CatFact.innerText=data[2].text;
}

// by Promise chain--> used somewhere but the better way is the previous one i.e. by use of async-await
// function getfacts(){
//     fetch(URL)
//     .then((response)=>{
//         return response.json();
//     })
//     .then((response)=>{
//         return response.json();
//     })
// }

btn.addEventListener("click",getFacts);