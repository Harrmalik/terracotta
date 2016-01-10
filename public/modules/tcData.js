(function() {
    var app = angular.module('tc-data', []);

  app.controller('MenuController', ['$http', function($http) {
    var menu = this;
    this.view = 'beverages';
    var tcMenu = "/data/menu.json"

    menu.items = [ ];

    $http.get(tcMenu).success(function(data) {
      menu.items = data;
    });
    
    this.selectView = function(currentView) {
      this.view = currentView;
    };
    
    this.isShowing = function(currentView) {
      return this.view === currentView;
    };
    
    this.addLike = function($index){
      $http.post(tcMenu, menu.items.expressos[$index].likes += 1);
    } ;
    
    }]);
    
    app.directive('menuItem', function() { 
      return {
        restrict: "E",
        templateUrl: "partials/menuItem.html"
      };
    });
    
    app.directive('menuItems', function() { 
      return {
        restrict: "E",
        scope: {  type: '='  },
        templateUrl: "partials/menuItems.html"
      };
    });
})();