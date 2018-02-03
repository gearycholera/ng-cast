angular.module('video-player')

  .component('app', {
    templateUrl: 'src/templates/app.html',
  
    controller: function($window, youTube) {
      
      this.index = 0;
      this.videos = [];
      this.currentVideo = {};
      this.selectVideo = (index) => {
        this.currentVideo = this.videos[index];
        
      };
      this.searchResults = (query, callback) => {
        youTube.search(query, this.changeState);
      };
      this.changeState = (videos) => {
        this.videos = videos;
        this.currentVideo = videos[0];
      };
      
      this.searchResults('', this.changeState);
      
    }
  });
