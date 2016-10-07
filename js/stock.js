angular.module('stockApp') 
  .controller('StockController', function($scope) {
        $scope.productos = [
      {code:0001 ,descripcion:'Iphone 7', price: 700 , active:true , notes:'Very good cell phone' , picture: '0003.JPG'},
      {code:0002 ,descripcion:'Tango 300', price: 100 , active:true , notes:'Very Old cell phone' , picture:'0002.jpg'},
      {code:0003 ,descripcion:'Nokia 1100', price: 1000 , active:true , notes:'Very cool cell phone' , picture:'0001.jpg'}
      ];
  });