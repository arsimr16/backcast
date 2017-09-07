var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.render();
    this.collection.forEach((video) => {
      this.renderVideo(video);
    });
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  renderVideo: function(video) {
    var videoEntry = new VideoListEntryView({model: video});
  },

  template: templateURL('src/templates/videoList.html')

});
