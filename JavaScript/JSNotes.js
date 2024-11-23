                          //variables [let,var,const]//
//var age=19;
// console.log("AKASH YADAV");


// if(true){
//     console.log(age);
// }

// function solve(){
//     var age=19;
//     console.log(age);
// }
// console.log(age);
// solve();

// var x=10;
// Redefinition is  possible and Globally & function scoped;
// var x=20;

//{
    //let a=10;
    //Redefinition is not possible & it is blocked scope;
    //cosole.log(a);
//}

// let a=10;
// a="akash";  //Dynamically typed language
// a=true;
// a=null;

//const a=10;
//a=20;  //Redefinition & updation of value is not possible
//console.log(a);
//const a=24;

// let marks=8.9465;
// let a='AKASH';
// console.log(typeof(a));  //tells us the datatype of marks

// let a=undefined;
// let b=null;
// console.log(typeof a, typeof b);
// TYPE OF NULL IS --> OBJECT????? //

                               /*BITWISE OPERATORS*/
// console.log(2&5);    //Bitwise AND
// console.log(2|5);   //Bitwise OR
// console.log(2^2);   //Bitwise XOR
// console.log(~2);   //Bitwise NOT
// console.log(10>>1);  //n>>a-->n/2^a; //Rightshift
// console.log(5<<2);  //n<<a-->n*2^a;  //Leftshift

                              /*CONDITIONALS*/
//IF-ELSE//
/*let age=10;
if(age>18)
{
    console.log('Eligible to vote');
}
else
{
    console.log('Not eligible to vote');
}*/

//Switch//
// let num=4;
// switch(num)
// {
//     case 1: console.log('A');
//     break;
//     case 2: console.log('K');
//     break;
//     case 3: console.log('A');
//     break;
//     case 4: console.log('S');
//     break;
//     default: console.log('H');
// }

                                  //LOOPS//
//For//
// for(let i=1;i<=10;i++)
// {
//     console.log("akash");
// }

//WHILE//
/*let a=6;
while(a!=0)
{
    console.log('akash');
    a--;
}*/

//do-WHILE//
/*let i=0;
do
{
    console.log('AKASH');
    i++;
}while(i<=5);*/

                                //STRING//
//creation of string//
// let a='YADAV';
// let b="AKASH YADAV";
// let c=`This is 
// AKASH YADAV
// the BRAND`;
// let d=new String('akash yadav');
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

//OPERATIONS ON STRING//
/*CONCATINATION*/
let s1='aakash';
let s2='YADAV';
// console.log(s1.length);
// console.log(s1.toUpperCase());  //convert to uppercase
// console.log(s2.toLowerCase());  //convert to lowercase

// let sentence="Hii Myself \"AKASH\" the OG";  // '\'--> a special char in string
// let substring=sentence.split(' '); //split on basis of seperator
// console.log(substring);
// console.log(substring.join('_')); //join on basis of seperator
// console.log(s1.substring(3));
// console.log(s1.substring(2,5)); //end index not involved
// let ans=s1+s2; 
// console.log(ans);

// let finalAns=`${s1}${s2}`;  //imp notation//
// console.log(finalAns);

                           //FUNCTION//
// function saymyname()
// {
//     console.log('AKASH');
// }

//  saymyname();

// function print1to50()
// {
//     for(let i=0;i<=50;i++)
//     {
//         console.log(i);
//     }
// }

// print1to50();

// function print(num)
// {
//     console.log('Printing number:',num);
// }
// print(5)

// function getAverage(num1,num2)
// {
//     console.log("Average:",(num1+num2)/2);
// }
// getAverage(2,6)

// function getSum(a,b,c)
// {
//     let sum=a+b+c;
//     return sum;
// }
// let ans=getSum(2,4,6);
// console.log(ans);

// function getmyName(FirstName,SecondName)
// {
//     let fullName=FirstName +" "+ SecondName;
//     return fullName;
// }

// let fullname=getmyName("AKASH","YADAV");
// console.log("Full Name:",fullname);

// const getMultiplication= function(a,b){
//     return a*b;
// }

// let ans=getMultiplication(2,20);
// console.log(ans);

// let squareNumber= function(a)
// {
//     return a**2;
// }
// let ans=squareNumber(8);
// console.log(ans);

// let getExp=(a,b)=>{   //ARROW Function//
//     return a**b;
// }

// let ans=getExp(2,10);
// console.log(ans);

// let RevealmyName=(firstname,secondname)=>{
//     return firstname+secondname;
// }

// let name=RevealmyName('aakash','YADAV');
// console.log(name);

                            //OBJECT [in key:value pairs]//
let obj={
    name: "AKASH",
    //"name":"AKASH YADAV", //agar value me space h to key me bhi "" use kro//
    class: "CSE 2-Year" ,
    weight: 51,
    height: "5ft",
    greet:function(){
        console.log("hi myself akash ..the OG");
    }
}                 

// //FOR IN//
// for(let key in obj){
//     console.log(key," ",obj[key]);
// }

// console.log(obj);     
// obj.greet()
// console.log(typeof(obj));
// let obj2=obj          //Read about Shallow Copy & Deep copy//
// console.log(obj2); 

                           //ARRAYS//
// let arr=[1,2,3,4,5];
//with constructor
// let brr=new Array("akash",1,true);
// brr.push("yadav");
// brr.push('Stars');
// brr.push('Galaxy');
// brr.push('universe')
// brr.push('BlackHole');
// brr.pop();
// brr.shift(); //removes leftmost element
// brr.unshift("Alien");  //adds to leftmost
// console.log(brr.slice(4,6));  //gives subarray with exclusion of last index mentioned
// brr.splice(1,2,'akash'); //can insert,remove & change values in array
// brr.splice(1,0,'Hello')
// console.log(brr);                          
// console.log(typeof(brr));

//MAP//
//let arr=[10,20,30];

// arr.map((number,index)=>{
//     console.log(number);
//     console.log(index);
// })

// let ansArray=arr.map((number)=>{
//     return number*number;
// })
// console.log(ansArray);

//FILTER//
// let arr=['akash',1,'yadav',3,null];

// let ans=arr.filter((value)=>{
    
//     if(typeof(value)==='number'){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(ans);

//REDUCE//
// arr=[10,20,30,40];

// let ans= arr.reduce((acc,curr)=>{
//        return acc+curr;
// },0)
// console.log(ans);

//SORT//
// let arr=[8,2,3,4,9,0]; 
// arr.sort();
// console.log(arr);
// //:-How to do sort in descending order
// console.log(arr.indexOf(4));

// FIND//

//FOR EACH//
// arr.forEach((value,index) => {
//     console.log("Number: ",value,"Index: ",index);
// })

//FOR-OF//
// let arr=[2,4,6,2];
// for(let value of arr){
//     console.log(value);
// }

// let fullName="AAKASH";
// for(let val of fullName){
//     console.log(val);
// }


//FUNCtION HOISTING//-->function declartion+logic apne current scope me upar move kr jayegi
//only possible in plane funcn. declaration not in funcn. expression declaration

// saymyName('akash')

// function saymyName(name){
//     console.log(name);
// }

//VARIABLE HOISTING//-->Variable declartion apne current scope me upar move kr jayegi
//only possible in var keyword not in let & const//
// console.log(age);
// var age=1;

//CLASS HOISTING IS NOT POSSIBLE//
// const obj1=new Human();
// class Human{

// }

//FUNCTION CALL STACK//-->Tracking,completing,returning after calling a function is maintained Fucn. Call Stack


//FUNCTION Calling FUNCTION//

// function greetMe(greet,fullName){
//     console.log("Hello",fullName);
//     greet();
// }

// function greet(){
//     console.log("Greeting for the day");
// }

// greetMe(greet,"AKASH");

//FUNCTION RETURNING A FUNCTION//
// function sqrt(num){
//     return function(num){
//     return num*num;
//     }
// }
// let ans=sqrt(10);
// let finalAns=ans(10);
// console.log(finalAns);

//FUNCTION AS DATA STRUCTURES//
// const arr=[
//     function(a,b){
//         return a+b;
//     },
//     function(a,b){
//         return a-b;
//     },
//     function(a,b){
//         return a*b;
//     }
// ];
// let first=arr[2];
// let ans=first(5,10);
// console.log(ans);

//TEMPORAL DEAD ZONE??//

                     //CLASSES & OBJECTS//
// class Human{
//     //Properties
//     name='AKASH';  //public
//     #age=13;  //private--> only accessible inside the class but can be access & modify by getter and setter
//     wt=49;

//     //constructor
//     constructor(newAge,newWeight){
//         this.age=newAge;
//         this.wt=newWeight;

//     }
//     //Behaviour
//     walking(){
//         console.log('I am Walking',this.#age);
//     }

//     Running(){
//         console.log('I am Running');
//     }

//     get fetchage(){
//         return this.#age;
//     }

//     set modifyage(val){
//         this.#age=val;
//     }
// }

// let Obj=new Human(17,52);
// console.log(Obj.fetchage);
// Obj.walking();

                      //DEFAULT PARAMETERS//
// function sayName(myName="akash th OG"){
//     console.log("my name is: ",myName);
// }
// sayName();

   /*multiple default parameter*/
// function sayName(fName="AKASH",lName="ARYAN"){
//     console.log("my name is: ",fName,lName);
// }
// sayName();

    /*default dependent parameter*/
// function sayName(fName="akash",lName=fName.toUpperCase()){
//     console.log("my name is: ",fName,lName);
// }
// sayName("Akash");

     /*default parameter --> data structure like array,strings,objects & passing [null & undefined] as arguments*/
// function solve(value=['I','ME','MySELF']){
//     console.log("Hello JII -->",value);
// }
// solve(undefined /*null*/)

   /*default parameter --> function*/
// function myAge(){
//     return 353;
// }

// function utility(name="akash" , age=myAge()){
//     console.log(name," ",age);
// }

// utility();

                      //common IN-built OBJECTS//
/*console.log("AKASH");

console.log(Math.PI);

console.log(Math.max(23,656,7875,32,88));

console.log(Math.min(23,656,7875,32,88));

console.log(Math.round(1.9));

console.log(Math.ceil(1.2));

console.log(Math.abs(-4));

console.log(Math.random());

console.log(Math.sqrt(5));

console.log(Math.pow(2,10));

console.log(Math.sin(0));

let curr=new Date();
console.log(curr);

let date=new Date('June 06 2003 08:33')
console.log(date);

let newDate=new Date(2003, 5, 5, 8);
console.log(newDate);

console.log(newDate.getDay());*/

                    //OBJECT CLONING//
/*let src={
    age:12,
    wt:49,
    ht:189
};*/

/*let src2={
    value:101,
    name:"AKASH YADAV"
};*/

// console.log(obj);
// obj.Attitude="A+";  //dynamic creation of object//
// console.log(obj);


//CLoning by SPREAD(...)operator
// let dest={...src}; 
// //let dest=src; //this is not a cloning only reference matches of both
// src.age=100;
// console.log("src: ",src);
// console.log("dest: ",dest);

/*[TRY TO USE spread/Assign method for cloning]*/

//CLoning by ASSIGN Method//
/*let dest=Object.assign({},src,src2); 
//src.age=100;
console.log("src: ",src);
console.log("dest: ",dest);*/

//CLoning by ITERATION Method//
/*let dest={};
for(let key in src){
    let newKey=key;
    let newValue=src[key];
    //insert newKey and value in dest and create a clone
    dest[newKey]=newValue;
}

console.log("src: ",src);
console.log("dest: ",dest);*/

//GARBAGE COLLECTOR-->apke program me unused memory ko free krata h->for better memory management & prevents data leak//

//Types of ERROR//
//Compile time error
//syntax error
//console.log(x;

//Runtime error
//Reference error
//console.log(x);

//ERROR HANDLING-->Try-Catch block
// try{
//     console.log("try block starts here");
//     console.log(x);
//     console.log("try block ends here");
//     //a

//     //b

//     //c
// }

// catch(err){
//     //define krte h, error k saath aap kya krna chahte h
//     //retry logic
//     //fallback mechanism
//     //logging
//     //custom error
//     console.log("I AM INSIDE CATCH BLOCK");
//     console.log("Your error is here: ",err);
// }

// finally{
//     console.log("I will run everytime ,as i am finally block");
// }

//Let's create a custom error//
//try{
//     console.log(x);
// }
// catch(err){
//     throw new Error("Bhai pehle declare kro, phir print kro")
// }

//DOM-->Document Object Model//-->Change HtML by Js
/*ACCESS-->M-1
Document.getelementbyid();
Document.getelementsbyclassName();
Document.getelementbyTagName();*/

/*M-2
querSelector('#id');
querySelector('.class')
querySelector('p')
//But ye hamesha pehla wala hi return krega bhale hi multiple class/tags exist krti h 
querySelectorAll(''.class')
by select the part then ->$0 */

//update existing element//
/*element.innerHTML-->get/set & or kitne tags/element h kisi element ke andar usse get/set kr sakte h
element.outerHTML-->HW?
element.innerText-->shows the Availaible UI
element.textContent-->shows us the way written in html code */

//Add Element
// first create --> Document.createElement('Element');
// to add --> appendChild('parent') Last me add hoga parent tag me
// to add any position --> Element.insertAdjacentElement('position',content);
// position->beforebegin,afterbegin,beforeend,afterend;
//to remove--> first select parent & child-->parent.removechild(child);

//let mydiv=document.querySelector('#sdiv');

/*let newElement=document.createElement('span');
newElement.textContent="AKASH YADAV";

mydiv.insertAdjacentElement('afterbegin',newElement);*/

// let parent=document.querySelector('#sdiv');
// let child=document.querySelector('#fpara');
// parent.removeChild(child);

                                 //EVENTS & LISTENERS//
   //SYNTAX:- <event-target>addEventListener('<event-type>',<function-action>)

//  function changeText(){
//     let para1=document.getElementById('para1');
//     para1.textContent="AKASH"
// }

// let para1=document.getElementById('para1');

// para1.addEventListener('click',changeText);
//para1.removeEventListener('click',changeText)

//Phase of Events--> CAPTURING PHASE(reaching towards the target) --> AT-TARGET(at or on the target) --> BUBBLING PHASE(moving out towards root element or div)

// let anchorElement=document.getElementById('fanchor');
// function prevent(event){
//     event.preventDefault();
//     anchorElement.textContent="click done bhai";
// }
// anchorElement.addEventListener('click',prevent);


/*let paras = document.querySelectorAll('p');

function alertPara(event){
    if(event.target.nodeName == 'SPAN'){
        alert("You have clicked on: " +(event.target.textContent));
    }
    //target bta dega ki click kispe hua span or para pe//  
} 

let mydiv=document.getElementById('wrapper');

document.addEventListener('click',alertPara);*/
//DOM contentLoaded event ko use krke ->dynamically script add kre ..FIND?