appPkmn.directive("footerNav", function() {
  return {
    templateUrl: "footer.html",
    restrict: "AE",
    scope: {
      desenvolvedor: "@"
    }
  };
});

appPkmn.directive("searchDebug", function() {
  return {
    require: "ngModel",
    link: function(scope, element, attrs, ctrl) {
      element.bind("keyup", function() {
        console.log(ctrl.$viewValue);
      });
    }
  };
});

appPkmn.directive("sideBar", function() {
  return {
    link: function(scope, element, attr) {
      scope.$watch(attr.sideBar, function(active) {
        console.log(active);
        if (active) {
          element.addClass("open");
          return;
        }

        element.removeClass("open");
      });
    }
  };
});