var Videos = Backbone.Collection.extend({

  model: Video,


  initialize: function() {
    // this.collection.on('select', function() {
    //
    // });
  },

  search: function(string) {
    var dataObj = {
      'q': string,
      'maxResult': '5',
      'key': window.YOUTUBE_API_KEY,
      'type': 'video',
      'part': 'snippet',
      'videoEmbeddable': 'true'
    };

    //use backbone ajax call instead of jQuery ajax calls
    Backbone.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: dataObj,
      success: function(data) {
        console.log('success', data);
        this.reset(data.items);
      },
      error: function(data) {
        console.log('error', data);
      }
    });
  },

  parse: function(data) {
    return data.items;
  }
});
