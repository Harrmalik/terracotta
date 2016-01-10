(function() {
    var app = angular.module('terraCottaApp', ['tc-data']).config(function($interpolateProvider){
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

    var title ="home";
    app.controller('NavController', function(){
        this.page = 1;
        
        this.selectPage = function(currentPage) {
            this.page = currentPage;
        }
        
        this.isSelected = function(currentPage) {
            return this.page === currentPage;  
        };
    });
    
    app.directive('mainMenu', function() {
       return{
          restrict: 'E',
          templateUrl: '/partials/menu.html'
       } ;
    });
    
    app.directive('tcFooter', function() {
       return{
          restrict: 'E',
          templateUrl: '/partials/footer.html',
       } ;
    });
}());