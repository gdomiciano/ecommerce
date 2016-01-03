var app = angular.module('ecommerce', ['ui.bootstrap']);
app.controller('window', function ($scope) {
    'use strict';

    $scope.products = [];

});
app.controller('startCarousel', function($scope){
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
        var imgNumber = slides.length + 1;
        slides.push({
            image: 'http://lorempixel.com/680/240/technics/'+imgNumber+'/',
            text: 'Campanha Copa 2014',
            description: 'Status'
        });
    };
    for (var i=0; i < 6; i++) {
        $scope.addSlide();
    };
    // console.log(slides);
});

app.controller('header', function($scope){

    $scope.userBox = function(){
        if($('.user-details').hasClass('hidden')){
            $('.user-details').removeClass('hidden');
        }else{
            $('.user-details').addClass('hidden');
        }
          
    }
})
