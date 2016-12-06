(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListBuyController', ShoppingListBuyController)
.controller('ShoppingListBoughtController', ShoppingListBoughtController)
.service('ShoppingListService', ShoppingListService);

ShoppingListBuyController.$inject = ['ShoppingListService'];
function ShoppingListBuyController(ShoppingListService) {
  var buy = this;

  buy.shoppingList = ShoppingListService.getItems();

  //Move the item to the other list by changing the bought property to true
  buy.toggle = function(item) {
    item.bought = true;
    ShoppingListService.incCount();
  };

  //Checks if all of the items were bought
  buy.checkAllBought = function(){
    return ShoppingListService.getCount() === ShoppingListService.getNumItems();
  };

  //Check if the item is bought
  buy.checkBought = function(item) {
    return item.bought;
  };
}

ShoppingListBoughtController.$inject = ['ShoppingListService'];
function ShoppingListBoughtController(ShoppingListService) {
  var bought = this;

  bought.shoppingList = ShoppingListService.getItems();
  console.log(bought.shoppingList);

  bought.checkBought = function(item) {
    return item.bought;
  }

  bought.checkCount = function() {
    return(ShoppingListService.getCount() === 0);
  }
}

function ShoppingListService() {
  var service = this;

  var shoppingList =
      [
        {
          name: "Cookies",
          quantity: "5",
          bought: false,
          index: 0
        },
        {
          name: "Fizzy Drinks",
          quantity: "10",
          bought: false,
          index: 1
        },
        {
          name: "Chips",
          quantity: "2",
          bought: false,
          index: 2
        },
        {
          name: "Biscuits",
          quantity: "6",
          bought: false,
          index: 3
        },
        {
          name: "Coffee",
          quantity: "1",
          bought: false,
          index: 4
        },
        {
          name: "Burgers",
          quantity: "12",
          bought: false,
          index: 5
        },
        {
          name: "Hot dogs",
          quantity: "8",
          bought: false,
          index: 6
        },
      ];
    var numItems = shoppingList.length;
    var count = 0;

  service.getItems = function () {
    return shoppingList;
  };

  service.getNumItems = function () {
    return numItems;
  };

  service.getCount = function () {
    return count;
  };

  service.incCount = function () {
    count++;
    return count;
  };

  service.setBought = function (index) {
    service.shoppingList[index].bought = true;
  };
}
})();
