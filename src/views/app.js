var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function(data) {
    this.videos = new Videos(data);
    this.render();
    this.search = new SearchView({$el: this.$('.search')});
    this.videoPlayerView = new VideoPlayerView({$el: this.$('.player'), model: this.videos});
    this.videoListView = new VideoListView({$el: this.$('.list'), collection: this.videos});
  },


  render: function() {
    this.$el.html(this.template(this));
    return this;
  },

  template: templateURL('src/templates/app.html')

});
