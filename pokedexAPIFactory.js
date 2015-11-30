appPkmn.factory("pokedexAPI", function($http, config) {

  var _getAllPokemons = function() {
    return $http.get(config.rootUrl + "api/v1/pokedex/1/");
  };

  return {
    getAllPokemons: _getAllPokemons
  };
});