(function(){
  'use strict';

  angular.module('lunchChecker',[])
  .controller('lunchCheckerController', lunchCheckerController);

  lunchCheckerController.$inject = ['$scope'];
  function lunchCheckerController($scope) {
      $scope.numDishes = "";
      $scope.message = "";

      $scope.canEat = function () {
        var input = $scope.numDishes.split(',');
        var count = 0;

        //Check each element in the split array
        for(var i = 0; i < input.length; i++)
        {
          //this code segment ignores any blank entries ie ", ," in the list
          if(input[i].trim() != "") {
              count++;
          }
        }

        $scope.message = getMessage(count);
      };

  };

/*
**  Returns the messages, this has been put into another function to make
**  changes to the values simpler
*/
  function getMessage(count) {
    if(count <= 3 && count != 0)
    {
      return "Enjoy";
    } else if(count >= 4) {
      return "Too much!";
    }
    else {
      return "Please enter data first.";
    }
  }
})();
