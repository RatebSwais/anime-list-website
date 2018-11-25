//Query sent to the api
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

  //API url and its options
  var url = 'https://graphql.anilist.co', 
  options = {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: query
    })
  };


  //Making the request and handling the response
  fetch(url, options).then(handleResponse)
  .then(handleData)
  .catch(handleError);

  function handleResponse(response){
    return response.json().then(function(json) {
      if(response.ok){
  var object = json.data.Page.media; 
  console.log(object);
  var out="";
  for(var index in object){
    if(object[index].coverImage !== null && object[index].title.romaji!== null){
    out += "<div class='card' style='width: 20rem; height: auto;'> <img style='background-size: cover;' src='"+object[index].coverImage.extraLarge+"' class='card-img-top'> <div class='card-body'><h5>'"+object[index].title.romaji+"'</h5><p style='height: 130px; overflow-y: scroll; display: block;'>'"+object[index].description+"'</p></div></div>"  
  }
  }
  $(".grid-container").html(out);
  }
  else{handleError();}
  });
  }

  function handleData(data){
    console.log(data);
  }
  function handleError(error){
    console.error(error);
  }