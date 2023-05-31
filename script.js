// const datas = [
//     {
//         "title" : "Kung-Fu-Panda 1",
//         "img" : "images/Kung_Fu_Panda_1.jpg",
//         "genre" : "movies"
//     },
//     {
//         "title" : "Kung-Fu-Panda 2",
//         "img" : "images/Kung_Fu_Panda_2_Poster.jpg",
//         "genre" : "anime"
//     },
//     {
//         "title" : "Kung-Fu-Panda 3",
//         "img" : "images/Kung_Fu_Panda_3.jpg",
//         "genre" : "kdrama"
//     },
//     {
//         "title" : "Kung-Fu-Panda 4",
//         "img" : "images/Kung_Fu_Panda_1.jpg",
//         "genre" : "movies"
//     },
//     {
//         "title" : "Kung-Fu-Panda 5",
//         "img" : "images/Kung_Fu_Panda_2_Poster.jpg",
//         "genre" : "anime"
//     },
//     {
//         "title" : "Kung-Fu-Panda 6",
//         "img" : "images/Kung_Fu_Panda_3.jpg",
//         "genre" : "kdrama"
//     }
// ];

const links = ["Join Now", "Sign In", "Dark"];

for(let i=0; i <= links.length - 1; i++){
    var link = `
        <li>
           <a id="${links[i]}" href="#">${links[i]}</a>
        </li>
    `;
    document.getElementById("nav-links").innerHTML += link;

}

var movie, anime, kdrama, list;
var addList ="";

import dataList from './list.json' assert { type: 'json' };

dataList.forEach(element => {


    if(element.release === "popularOnNetflix"){
        
        movie = `
                <div id="${element.release}">
                <h2>Movie</h2>
                </div>
                
                `;
        getGenreDetail(element.title, element.image, element.genre, element.release);       
        document.getElementById("popular").innerHTML += list;

    }

    if(element.release === "latestRelease"){
        anime = `
                <div id="${element.release}">
                </div>
                
                `;
                getGenreDetail(element.title, element.image, element.genre, element.release);       
        document.getElementById("latest").innerHTML += list;
    }
    
    if(element.release === "continueWatching"){
        kdrama = `
                <div id="${element.release}">
                </div>
                
                `;
                getGenreDetail(element.title, element.image, element.genre, element.release);       
        document.getElementById("continue").innerHTML += list;
    }
    

    
});


console.log("TEST");
function getGenreDetail(title, img, genre){
    list = 
    `
       <div class="movie-list">
            <img class="thumbnail" src="${img}" alt="movie-kung-fu-panda 1">
            <br>
            <p class="movie-title">${title}</p>
        </div>
    `;
    

    
}
