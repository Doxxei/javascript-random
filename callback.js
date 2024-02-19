// callback : a function is paased to another fucntion as arguement

// hello(goodbye);


// function hello( callback){
//     console.log("hello world")
//     callback();
// }

// function goodbye(){
//    console.log("hello nigga");
// }

/// for each

// let numbers= [1,2,3,4,5]
//  numbers.forEach(double)
//  console.log(numbers)
// function double( elemnts,index,array){
//     array[index] =elemnts*2;
// }



///map() accepts the callback and applies to each function 


// const nums = [1,2,3,4,5,6];
//  const sqa = nums.map(sqaure)
//  const cub= nums.map(cubes)
// console.log(sqa)
// console.log(cub)

// function sqaure(elemnt){
//     return Math.pow(elemnt,2)
// }
// function cubes(elemnt) {
//   return Math.pow(elemnt, 3);
// }

///.filter()  creates a new array by filtering out new elemnts


// const nums = [1, 2, 3, 4, 5, 6];
// const even = nums.filter(iseven)
// const odd = nums.filter(isodd)
// console.log(even)
// console.log(odd)


// function iseven(element){
//     return element%2 ===0
// }

// function isodd(element){

//     return element %2!==0;
// }

/// .reduce()  reduce  the elemnt of array to a single values


// const nums = [1, 2, 3, 4, 5, 6];

// const addi = nums.reduce(add)
// console.log(addi) 

// function add( acc, ele){

//     return acc+ ele;
// }