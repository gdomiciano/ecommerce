var app = angular.module('ecommerce', ['ui.bootstrap']);

app.controller('ProductsCtrl', function ($scope) {
    'use strict';

    $scope.products = [
        {
            code: '#COD03021',
            image: 'img/products/paper.jpg',
            description: 'Papel Sulfite 75g Alcalino 210x297 A4 Chamex Office Ipaper',
            price: 'R$ 15,90'
        },
        {
            code: '#COD03022',
            image: 'img/products/paper.jpg',
            description: 'Papel Sulfite 75g Alcalino 210x297',
            price: 'R$ 15,90'
        },
        {
            code: '#COD03023',
            image: 'img/products/paper.jpg',
            description: 'Papel Sulfite 75g Alcalino 210x297 A4 Chamex Office Ipaper PT 500 Alcalino 210x297 A4 Chamex Office',
            price: 'R$ 31,99'
        }
    ];

});

app.controller('CarouselCtrl', function ($scope){
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
        var imgNumber = slides.length + 1;
        slides.push({
            image: 'http://lorempixel.com/680/240/technics/'+imgNumber+'/',
            text: 'Campanha Copa 2014',
            description: 'Status'
        });
    };
    for (var i=0; i < 3; i++) {
        $scope.addSlide();
    };
    // console.log(slides);
});

app.controller('HeaderCtrl', function ($scope){

    $scope.userBox = function(){
        if($('.user-details').hasClass('hidden')){
            $('.user-details').removeClass('hidden');
        }else{
            $('.user-details').addClass('hidden');
        }
          
    }
})
