angular.module('video-player')

  .component('search', {
    bindings: {
      result: '<',
      query: '@'
    },
    templateUrl: 'src/templates/search.html',
    controller: function() {
    
    }
  });
