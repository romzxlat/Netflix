
import dataList from './list.json' assert { type: 'json' };

var list;

dataList.forEach(element => {
    if(element.genre === "Movie"){

        getGenreDetail(element.title, element.image, element.genre, element.release);       
        document.getElementById("movie").innerHTML += list;
    }
});

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


// document.getElementById("btnCategory").onclick = function(){
//     var navSubMenu = document.getElementById("nav-sub-menu");
//     if (navSubMenu.style.display === "none") {
//         navSubMenu.style.display = "block";
//       } else {
//         navSubMenu.style.display = "none";
//       }
// }

const links = ["Join Now", "Sign In", "Dark"];

for(let i=0; i <= links.length - 1; i++){
    // var link = `
    //     <li>
    //        <button class="side-bar"><a href="#">${links[i]}</a></button>
    //     </li>
    // `;

    var link = `
        <li>
           <a href="#"><button id="${links[i]}">${links[i]}</button></a>
        </li>
    `;
    document.getElementById("nav-links").innerHTML += link;

}