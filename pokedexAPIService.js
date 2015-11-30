appPkmn.service("pokedexAPI", function($http, config){
  
  this.getAllPokemons = function(){
    return $http.get(config.rootUrl + "/api/v1/pokedex/1/");
  };
  
  this.getPokemon = function(id){
    return  $http.get(config.pokemonUrl + id);
  };
  
  this.getResourceUri = function(uri){
    return $http.get(config.rootUrl + uri);  
  };
  
});