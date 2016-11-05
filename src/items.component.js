(function(){
  'use strict';
  angular.module("data")
  .component("items",{
    templateUrl:"src/template/itemsComponent.html",
    bindings:{
      itemsData: '<'
    }
  });
})();
