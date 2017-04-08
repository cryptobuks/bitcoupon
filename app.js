var routerApp = angular.module('routerApp', ['ui.router','ngBootstrap']
);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })

        .state('issue', {
            url: '/issue',
            templateUrl: 'partial-issue.html'
        })

        // nested list(wallet id) with custom controller
        .state('issue.list', {
            url: '/list',
            templateUrl: 'partial-issue-list.html',
            controller: function($scope) {
                $scope.coupons = [
                    {
                        "issuer":"Raga2560@gmail.com",
                        "numberOfTokens":10,
                        "message":"Courtesy of Unocoin",
                        "value":100,
                        "bitcoinAddress":"3F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",
                        "code":"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX"
                    },
                    {
                    "issuer":"Prahaladbelavadi@gmail.com",
                    "numberOfTokens":15,
                    "message":"Courtesy of 91Springboard",
                    "value":100,
                    "bitcoinAddress":"3F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",
                    "code":"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX"
                },        {
                            "issuer":"Raga2560@gmail.com",
                            "numberOfTokens":10,
                            "message":"Courtesy of Unocoin",
                            "value":100,
                            "bitcoinAddress":"3F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",
                            "code":"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX"
                        },
                        {
                        "issuer":"Prahaladbelavadi@gmail.com",
                        "numberOfTokens":15,
                        "message":"Courtesy of 91Springboard",
                        "value":100,
                        "bitcoinAddress":"3F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",
                        "code":"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX"
                        }
                ];
            }
        })

        // nested list with just some random string data
        .state('issue.create', {
            url: '/create',
            templateUrl: 'partial-create.html',
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: 'partial-about.html' },
                'columnOne@about': { template: 'Look I am a column!' },
                'columnTwo@about': {
                    templateUrl: 'table-data.html',
                    controller: 'scotchController'
                }
            }

        });

});

routerApp.controller('scotchController', function($scope) {

    $scope.message = 'test';

    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 501
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];

});
