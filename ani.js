    
    $(function(){

    
    const app = document.getElementById("root");

    const container = document.createElement("div");
    container.setAttribute('class', 'container'); 

    app.appendChild(container);

    var query = `{ 
        Page(page: 1, perPage: 20){
        media(season: FALL, seasonYear: 2018){
            title {
            romaji
            english
            native
            userPreferred
            }
            coverImage {
            extraLarge
            }
            description
        }
        }    
    }
    `;

    var request = new XMLHttpRequest(); 
    request.open('POST', 'https://graphql.anilist.co/?query=' + query, true); 
    request.onload = function(){
    var data = JSON.parse(this.response);
    var object = data.data.Page.media;
    console.log(data);
    if(request.status >= 200 && request.status < 400){
        for (var index in object){
           const card = document.createElement("div");
           card.setAttribute('class', 'card');
           const coverImage = document.createElement('img');
           coverImage.src = object[index].coverImage.extraLarge;
           const h1 = document.createElement("h1");
           h1.textContent = object[index].title.romaji;
           const description = document.createElement("p");
           description.textContent = object[index].description;
           container.appendChild(card);
           card.appendChild(coverImage);
           card.appendChild(h1);
           card.appendChild(description);
        };
    }
    else{
        console.error(error);   
    }
    }

    
    request.send();

});