 // map() Method
let arr=[2,4,1,5,8]
let updatedArr=arr.map(val=>val*2)

    console.log(arr);
    console.log(updatedArr)

 // filter() Method
let brr=[5,2,10,9,8]
let updatedBrr=brr.slice().filter(val=>val>5)

    console.log(brr)
    console.log(updatedBrr)

 // reduce Method 
 let crr=[2,4,8,10]
 let updatedCrr=crr.reduce((prev,curr)=>curr=prev+curr)
    console.log(crr)
    console.log(updatedCrr)  


// COMPARISONS->    MAP()                  FILTER()                REDUCE()
//RETURN TYPE-> Returns a new array,| Returns a new array,| Returns a single element
//ACTION-> Modifies each element of the array,| Filter out the element which passes the condition,| Reduces array to a single value
//PARAMETERS-> (value, index, array),| (value, index, array),| (accumulator, value, index, array)