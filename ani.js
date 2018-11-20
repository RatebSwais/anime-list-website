var query = `query($id: Int, $search: String) {
  Character(id: $id, search: $search) {
    name {
      first
      last
      native
      alternative
    }
    image {
      large
    }
    description
  }
}
`;

var variables = {
  search: 'Makise'
};

var url = 'https://graphql.anilist.co', 
options = {
  method: 'POST',
  headers:{
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({
    variables: variables, 
    query: query
  })
};


fetch(url, options).then(handleResponse)
.then(handleData)
.catch(handleError);

function handleResponse(response){
  return response.json().then(function(json) {
    if(response.ok){
//return json;
var object = json.data.Character.image.large; 
console.log(object);
//var out = "<img width='200px' src='"+object+"'/>"
document.getElementById("img1").src = object;
document.getElementById("img2").src = object;
//document.getElementById("display").innerHTML = out;
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