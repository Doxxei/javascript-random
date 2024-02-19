////calllback hell


// function add(callback){

//     setTimeout(()=>{console.log("ehlooo")},2000);
//     callback();
// }



// function sub(callback){
//     setTimeout(() =>{
//         console.log("jknasd"),3000

//     })

//     callback()
// }



// add(()=>{
//     sub(()=>console.log("loh"))
// })


////promises - object which handel the asynchio




// function walk (){

//  return new Promise((resolve,reject) =>{

//     setTimeout(() => {
//       resolve("okoko");
//     }, 3000);
//  }) 

// }

// function kit() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dog = ture;
//       if(dog){
//         resolve("lalal");

//       }
//       else{
//         reject("nlo")
//       }
      
//     }, 2000);
//   });
// }

// walk().then( value => {console.log(value); return kit()})
// .then(value =>console.log(value)
// .catch(error => console.error(error))); 




// walk(()=>{
//     kit(()=> console.log("oollo"))
// })

// function kit() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dog = true;
//       if(dog){
//         resolve("lalal");

//       }
//       else{
//         reject("nlo")
//       }
      
//     }, 2000);
//   });
// }

// async function ch (){

//   try{
//     const hc = await kit();
//   console.log(hc);

//   }
//   catch(error){
//     console.error(error);
//   }
  
// }

// ch();
////fetch   
// fetch("name.json")
//  .then(Response => Response.json())
//  .then(value => console.log(value))

// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
// .then(Response => Response.json())
// .then(data => console.log(data.name)) 
// .catch(error => console.error(error));
// fetchdata()

//  async function fetchdata(){
    

//     try{
//       const Response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");

//       if(!Response.ok){
//         throw new error ("could not")
//       }
//        const data = await Response.json();
//        console.log(data)

//     }
//     catch(error){

//   console.error(error)
//  }
//  }
 