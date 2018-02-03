angular.module('video-player')
  .service('youTube', function($http) {
  // TODO
    this.search = function(query, callback) {
      return $http({
        url: 'https://www.googleapis.com/youtube/v3/search',
        type: 'GET',
        params: {
          key: window.YOUTUBE_API_KEY,
          q: query,
          maxResults: 5,
          part: 'snippet',
          type: 'video',
          videoEmbeddable: 'true'
        }
      })
        .then((response) => {
          callback(response.data.items);
        });
    };  
  });




    