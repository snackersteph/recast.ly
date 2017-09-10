var searchYouTube = ({key, query, max=5}, callback) => { 
  //options is an object with properties key, query, and max

  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
  .done(({items}) => {
    if (callback) {
      callback(items);
    }
  }) 
  .fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) => console.error(err));
  });

  // $.ajax({
  //   // This is the url you should use to communicate with the parse API server.
  //   url: 'https://www.googleapis.com/youtube/v3/search',
  //   type: 'GET',
  //   data: {'maxResults': ${options.max},
  //     'part': 'snippet',
  //     'q': ${options.query},
  //     'type': 'video',
  //     'videoEmbeddable': 'true',
  //     'key': ${options.key}
  //   },
  //   // contentType: 'application/json',
  //   success: function (data) {
  //     console.log('it worked');
  //   },
  //   error: function (data) {
  //     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
  //     console.error('u messed up', data);
  //   }
  // });
};

window.searchYouTube = searchYouTube;

// https://www.googleapis.com/youtube/v3/search

// buildApiRequest('GET',
//                 '/youtube/v3/search',
//                 {'maxResults': '25',
//                  'part': 'snippet',
//                  'q': 'surfing',
//                  'type': ''});
