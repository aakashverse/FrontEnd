// document.title= "Akash is good"

// document.body.firstElementChild
// document.body.firstElementChild.childNodes
// document.body.firstElementChild.children

// let boxes=document.getElementsByClassName("boxes")
// console.log(boxes);

// boxes[2].style.backgroundColor = "red"

//document.getElementById("redbox").style.backgroundColor="red"

// document.querySelector(".boxes").style.backgroundColor="green"

//console.log(document.querySelectorAll(".boxes"))

// document.querySelectorAll(".boxes").forEach(e=>{
//     e.style.backgroundColor="yellow"
//     console.log(e);
// })

function factorial(number){
    let arr=Array.from(Array(number+1).keys())    //trick to create array with keys
    let c=arr.slice(1,).reduce((a,b)=>{
        return a*b;
})
console.log(c);
}

factorial(5)

