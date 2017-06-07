/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */

 angular
   .module('tunely', ['ngRoute'])
   .config(config)
   .controller('AlbumsIndexController', AlbumsIndexController);

config.$inject = ['$routeProvider', '$locationProvider'];
  function config(   $routeProvider,  $locationProvider   ) {
    $routeProvider
      .when('/', {
        templateUrl: '/templates/albums',
        controllerAs: 'albumsIndexCtrl',
        controller: 'AlbumsIndexController'
      })
      .when('/albums/:id', {
        templateUrl: 'This template will show an album!',
        controller: 'AlbumsShowController',
        controllerAs: 'albumsShowCtrl'
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
