(function () {
'use strict';
  angular.module("data")
  .controller("ItemController",ItemController);

  ItemController.$inject = ['myItem']
  function ItemController(myItem){
    var vm = this;
    vm.items = myItem;
  }
})();
