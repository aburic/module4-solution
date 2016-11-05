(function () {
'use strict';
  angular.module("data")
  .controller("CategoriesController",CategoriesController);

  CategoriesController.$inject = ["myData"]
  function CategoriesController(myData){
    var vm = this;
    vm.categories = myData;
  }
})();
