angular
  .module('tunely')
  .controller('AlbumsShowController', AlbumsShowController);

AlbumsShowController.$inject = ['$http', '$routeParams'];
function AlbumsShowController (  $http,   $routeParams  ) {
  var vm = this;
  console.log($routeParams);

  $http({
    method: 'GET',
    url: '/api/albums/'+$routeParams.id
  }).then(function successCallback(json) {
    vm.album = json.data;
  });

  vm.editAlbum = function (album) {
    $http({
      method: 'PUT',
      url: '/api/albums/'+album._id,
      data: album
    }).then(function successCallback(json) {
      // don't need to do anything!
    }, function errorCallback(response) {
      console.log('There was an error editing the data', response);
    });
  }
}
