var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function(data) {
    this.videos = new Videos(data); //create a collection of videos
    this.render();
    this.search = new SearchView({el: this.$('.search')}); //create a search view
    this.videoPlayerView = new VideoPlayerView({el: this.$('.player'), collection: this.videos}); //Passed in a collection because this.videos is a collection
    this.videoListView = new VideoListView({el: this.$('.list'), collection: this.videos});
  },


  render: function() {
    this.$el.html(this.template(this));
    return this;
  },

  template: templateURL('src/templates/app.html')

});
