(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/template/home.html'
  })
  .state('categories',{
    url:'/categories',
    templateUrl:"src/template/categoriesView.html",
    controller:"CategoriesController as categoriesController",
    resolve:{
      myData:['MenuDataService',function(MenuDataService){
        return MenuDataService.getAllCategories().then(function(response){
          return response.data;
        });
      }]
    }
  })
  .state("menu_items",{
    url:"/items",
    templateUrl:"src/template/itemView.html",
    params:{
      categoryShortName :null
    },
    controller:"ItemController as itemController",
    resolve:{
      myItem:['$stateParams','MenuDataService',function($stateParams,MenuDataService){
        return MenuDataService.getItemsForCategory($stateParams.categoryShortName).then(function(response){
          console.log(response.data);
          return response.data.menu_items;
        });
      }]
    }
  });
}

})();
