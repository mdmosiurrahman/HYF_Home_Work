/* HomeWork week7 */

    //Step 1.1

let number = [1,2,3,4];

let oddNumbers = number
    .filter(x => x % 2 !== 0)
let evenNumbers = oddNumbers
    .map(number => number * 2);
    console.log("The doubled numbers are :",evenNumbers);

    //Step 1.2


 /* Get Ajax Data from json link */
 
function getAjaxData(url, callback) {
    // Create new ajax call with the js function called XMLHttpRequest
       const request = new XMLHttpRequest();
       request.addEventListener('load', function () {
     // This in here is our callback function
     // Check our server responsecode, 200 means ok, success:
        if (this.status === 200)
        callback(JSON.parse(request.responseText));
        else
        console.log('Something is probably wrong with the url');
    });

        request.addEventListener('error', () => {
        console.log('Server error like timeout');
    });

      // initializes a request with an http method
       request.open("GET", url);
    
      // Sends the request
       request.send();
}



moviesUrl='https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json'

getAjaxData(moviesUrl,moviesData =>{
       console.log("All MovieData",moviesData);
    
 /*--Give each movie a tag: Good (>= 7), Average (>= 4 and < 7), Bad (< 4) based on the ratings.--*/
      const GoodTag=moviesData
      .filter(movieRating => movieRating.rating >=7);
      console.log("Total number of Good movies: ",GoodTag.length);
      
      const AverageTag = moviesData
      .filter(movieRating => movieRating.rating >= 4 && movieRating.rating <7);
      console.log("Total number of Average movies:",AverageTag.length);
      
      const BadTag = moviesData
      .filter(movieRating => movieRating.rating < 4);
      console.log("Total number of Bad movies: ",BadTag.length);
      
      
/*---Calculate the average rating of all the movies----*/
      
      const TotalRatings = moviesData
      .reduce((sum,value) => sum +value.rating,1)
       //console.log(TotalRatings);
      
      const AverageRating = TotalRatings/moviesData.length;
      console.log("Average rating of all the movies:",AverageRating);
    
/*--Count the number of movies containing the following keywords: ["The", "dog", "who", "is", "not", "a", "man"]. Can you make sure the search is case insensitive? ---*/
    
      let movieTitle = moviesData
      .map(mTitle => mTitle.title);
      //console.log("Title of Movie",movieTitle);
    
      const names = movieTitle;
      const keywords = ["The", "dog", "who", "is", "not", "a", "man"];

      const specialNames = names.filter(name => {
      const words = name.split(/[^\w]/);
      return keywords.some(keyword => words.includes(keyword));
          
      });

      console.log("Total number of movies containing keywords",specialNames.length);
    
      
/*---Count the number of movies made between 1980-1989 (including both the years).---*/
          
      const moviesFrom1980To1989 = moviesData
      .filter (movie => movie.year >= 1980 && movie.year <= 1989);
      console.log("Total number of movies made between 1980-1989:",moviesFrom1980To1989.length);
})


