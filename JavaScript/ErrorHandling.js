let num1 = prompt("Enter first number: ")   

let num2 = prompt("Enter another number: ")
if(isNaN(num1) || isNaN(num2)){
    throw SyntaxError("Sorry this is not allowed..!")
}

let sum = parseInt(num1) + parseInt(num2)   //parse int-->converts num1 & num2 into INTEGER since prompt takes input as STRING


function main(){
let x=4;
try {
    console.log("The Sum is:",sum*x)

} catch (error) {
    console.log("Error aa gya bhai") 
}

finally{
    console.log("files are being closed and db connection is being closed")
}

}
let c=main()