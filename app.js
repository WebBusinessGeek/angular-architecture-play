var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/',
        {
            controller:'appController',
            template: function(){
                return '<p>This is it</p>'
            }
        }
    )
        .when('/test',
        {
            controller:'appController',
            template: '{{checkit()}}'
        }
    )

        .when('/user/index',
        {
            controller: 'userIndexController',
            templateUrl: 'userIndexView.html'
        }
    )
});

app.controller('appController', ['$scope','appTemplate' ,function($scope, appTemplate ){

    $scope.person = 'kevin';

    $scope.template = '<div> Hey man</div>';

    $scope.checkit = function()
    {
        return appTemplate.call();
    }

}]);

app.service('appTemplate', function(){
    this.call = function()
    {
        return 'this is from the template';
    }
});


app.controller('userIndexController', ['$scope', 'userApiLibrary', function($scope, userApiLibrary){

    $scope.users = 'This is all users';

    $scope.users = userApiLibrary.index();

    $scope.returnTemplate = function()
    {
        return userIndexTemplate.template();
    }
}]);

app.service('userIndexTemplate', function(){
    this.template = function()
    {
        return "Hello this is all the users, i said  {{users}}";
    }
});
