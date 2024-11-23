let button=document.querySelector(".btn")

// button.addEventListener("click",()=>{
//     alert("I was clicked..yayy!!")
// })

// button.addEventListener("click",()=>{
//     document.querySelector(".intro").innerHTML="<u>Yayy you were clicked..Enjoy your click!!</u>"
// })

// button.addEventListener("contextmenu",()=>{
//     alert("Don't hack us by Rightclick please..")
// })

button.addEventListener("keydown",(e)=>{
    console.log(e.key);
})