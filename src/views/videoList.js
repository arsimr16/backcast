var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('reset', this.render, this);
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach((video) => {
      this.renderVideo(video);
    });
    return this;
  },

  renderVideo: function(video) {
    var newVideo = new VideoListEntryView({model: video});
    this.$('.video-list').append(newVideo.render());
  },

  template: templateURL('src/templates/videoList.html')

});
