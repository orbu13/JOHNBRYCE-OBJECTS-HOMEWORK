// // // write a function that input from user ( using prmopt ) 3 movies and push them to array.

// let movies = []

// function getMovies (){
//     for(let i = 0; i < 3; i ++){
//         let movie = prompt("Enter your favorite movie:")
//         console.log(movie);
//         movies.push(movie)
//         console.log(movies);
//     }
//     return movies;
// }
// getMovies(movies)

// write a function that input from user rating number and return all the movies that higher than this rating

let rantingMovies = []; // Use an array to store multiple movies and ratings
function getRanting() {

    for (let i = 0; i < 3; i++) {
        let rantingMovie = {}; // Create a new object for each movie

        rantingMovie.name = prompt("Enter your favorite movie name:");
        rantingMovie.rating = prompt("Rate your movie on a scale of 1-10:");

        rantingMovies.push(rantingMovie); // Add the movie object to the array
    }

    return rantingMovies; // Return the array of movies
}

let userRatings = getRanting();

// write a function that delete a movie by movieName

function deleteName (movieName){
    for(let i = 0; i < rantingMovies.length; i++){
        if(movieName === rantingMovies[i].name){
            rantingMovies.splice(i, 1);
            return rantingMovies;
        }
    }    
    console.log(rantingMovies);
}