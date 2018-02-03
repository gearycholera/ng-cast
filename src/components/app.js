angular.module('video-player')

  .component('app', {
    templateUrl: 'src/templates/app.html',
  
    controller: function($window) {
      this.index = 0;
      this.videos = $window.exampleVideoData;
      this.video = this.videos[this.index];
      this.onClick = (index) => {
        this.video = this.videos[index];
      };
    }
  });
