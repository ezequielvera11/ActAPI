document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById("search-form");
    const numInput = document.getElementById("num");
    let img = document.getElementById("img");
    let txt = document.getElementById("text");
  
    function renderPokemon(imagen, name) {
      img.setAttribute("src", imagen);
      txt.innerHTML = name;
    }
  
    function verPokemon() {
      fetch(`https://pokeapi.co/api/v2/pokemon/${numInput.value}/`)
        .then((response) => response.json())
        .then((pokemon) => {
          let imagen = pokemon.sprites.front_default;
          let nombre = pokemon.name;
          renderPokemon(imagen, nombre);
        });
    }
  
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      verPokemon();
    });
  });


