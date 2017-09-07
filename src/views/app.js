var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function(data) {
    this.videos = new Videos(data);
    this.render();
    this.videoPlayerView = new VideoPlayerView({$el: this.$('.player'), collection: this.videos});
    this.videoListView = new VideoListView({$el: this.$('.list'), collection: this.videos});
  },


  render: function() {
    this.$el.html(this.template()); return this;
  },

  template: templateURL('src/templates/app.html')

});
