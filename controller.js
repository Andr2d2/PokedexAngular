appPkmn.controller("listarPkmnsCtrl", function($scope, pokedexAPI) {
  pokedexAPI.getAllPokemons()
    .success(function(data) {
      $scope.pkmns = data.pokemon;
    });
});

appPkmn.controller("detalhesPkmnCtrl", function($scope, pokedexAPI, $routeParams, config) {
  pokedexAPI.getPokemon($routeParams.id)
    .success(function(data) {

      var desc = String(data.descriptions[0].resource_uri);

      pokedexAPI.getResourceUri(desc).success(function(e) {
        data.description = e.description;
      });

      $scope.pkmnDetails = data;
      $scope.sprite = config.spriteUrl + $routeParams.id + ".png";
    });
});

appPkmn.controller("sideBarCtrl", function($scope){
  $scope.active = false;
  
  $scope.toggle = function(){
    $scope.active = !$scope.active;
  };
});