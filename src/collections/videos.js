var Videos = Backbone.Collection.extend({

  model: Video,
  events: {

  },

  initialize: function() {
    // this.
  },

  search: function(string) {
    console.log('Inside search function');
    var dataObj = {
      query: string,
      maxResult: 5,
      key: window.YOUTUBE_API_KEY,
    };

    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: JSON.stringify(dataObj),
      contentType: 'application/json',
      success: function(data) {
        // AppView(data);
        console.log('success', data);
      },
      error: function(data) {
        console.log('error', data);
      }
    });
  }
});
