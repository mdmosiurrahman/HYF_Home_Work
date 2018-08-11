//Step 1-Closure

//We have an array with the numbers from 1 to 1000. Now we are interested in all numbers in that array which are divisible by 3. And then divisible by 10. And then by 21.

let creatArry = [];
for( let i = 1; i <= 1000; i++ ){
    creatArry.push(i);
}
console.log(creatArry);

function divisibleFactory(x){
   return newArr => creatArry.filter((arry) => arry % x === 0)   
};

//Divisible by three.
let divisbleByThree = divisibleFactory(3);
console.log(divisbleByThree());

//Divisible by ten.
let divisibleByTen = divisibleFactory(10);
console.log(divisibleByTen());

//Divisible by twenty one.
let divisibleByTwentyOne = divisibleFactory(21);
console.log(divisibleByTwentyOne());

//We create an array with numbers 0-30.
let oneToThirthy = [];

//We call our function on each of the elements of the array.
for(let i=1; i<=30; i++){
    oneToThirthy.push(divisibleFactory(i)().length);
}

console.log(oneToThirthy);


//Step 2
const moviesUrl = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';
const getMoviesPromise = fetch(moviesUrl);
console.log(getMoviesPromise);
 getMoviesPromise.then((data)=> {
     data
     .json()
     .then((movieList)=>{
         
      console.log(movieList);
         
     });
 })



