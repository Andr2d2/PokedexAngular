appPkmn.config(function($routeProvider) {
  $routeProvider
    /*.when("/", {
      templateUrl: "index.html"
    })*/
    .when("/pokemon/:id", {
      templateUrl: "pokemon.html",
      controller: "detalhesPkmnCtrl"
    });
    //.otherwise({redirectTo: "/"});
});