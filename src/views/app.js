var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    var collection = new Videos(window.exampleVideoData);
    this.render();
    this.videoPlayerView = new VideoPlayerView();
    this.videoListView = new VideoListView({collection: collection});
  },


  render: function() {
    this.$el.html(this.template()); return this;
  },

  template: templateURL('src/templates/app.html')

});
