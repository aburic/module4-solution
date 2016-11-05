(function(){
  'use strict';
  angular.module("data")
  .component("categories",{
    templateUrl:"src/template/categoriesComponent.html",
    bindings:{
      categoriesData: '<'
    }
  });
})();
