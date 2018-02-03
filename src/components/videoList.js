angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      onClick: '<',
      index: '<'
    },
    templateUrl: 'src/templates/videoList.html',
    controller: function() {
      
    }
  });
