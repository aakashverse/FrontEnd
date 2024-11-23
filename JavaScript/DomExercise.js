// let box1=document.getElementById("b-1")
// box1.style.backgroundColor="blue"

// let box2=document.getElementById("b-2")
// box2.style.backgroundColor="yellow"


// let box3=document.getElementById("b-3")
// box3.style.backgroundColor="red"

// let box4=document.getElementById("b-4")
// box4.style.backgroundColor="green"

// let box5=document.getElementById("b-5")
// box5.style.backgroundColor="aqua"

let boxes=document.querySelector(".container").children

function getRandomColor(){
    let val1=Math.ceil(0+Math.random()*255);
    let val2=Math.ceil(0+Math.random()*255);
    let val3=Math.ceil(0+Math.random()*255);
    return `rgb(${val1},${val2},${val3})`;
}

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor=getRandomColor();
    e.style.color=getRandomColor();
})
