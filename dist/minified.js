let pokemonRepository=function(){let t=[],e="https://pokeapi.co/api/v2/pokemon/?limit=150";function n(e){"object"==typeof e&&"name"in e?t.push(e):console.log("pokemon error")}function o(t){i(t).then(function(){!function(t){let e=$(".modal-body"),n=$(".modal-title");$(".modal-header");n.empty(),e.empty();let o=$("<h1>"+t.name+"</h1>"),i=$('<img class = "modal-img" style="width:50%">');i.attr("src",t.imageUrl);let a=$("<p>Height: "+t.height+"</p>"),l=($("<p>weight: "+t.weight+"</p>"),$("<p>Type: "+t.types+"</p>"));n.append(o),e.append(i),e.append(a),e.append(l)}(t)})}function i(t){let e=t.detailsUrl;return fetch(e).then(function(t){return t.json()}).then(function(e){t.imageUrl=e.sprites.front_default,t.height=e.height,t.types=[],e.types.forEach(function(e){t.types.push(e.type.name)})}).catch(function(t){console.error(t)})}return{getAll:function(){return t},add:n,addListItem:function(t){let e=document.querySelector(".pokemon-list"),n=document.createElement("li"),i=document.createElement("button");n.classList.add("group-list-item"),i.innerText=t.name,i.classList.add("btn-primary"),i.setAttribute("data-target","#exampleModal"),i.setAttribute("data-toggle","modal"),n.appendChild(i),e.appendChild(n),i.addEventListener("click",function(){o(t)})},loadList:function(){return fetch(e).then(function(t){return t.json()}).then(function(t){t.results.forEach(function(t){n({name:t.name,detailsUrl:t.url})})}).catch(function(t){console.error(t)})},loadDetails:i,showDetails:o}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})});