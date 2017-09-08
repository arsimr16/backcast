var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.render();
    this.collection.on('select', this.render, this);
  },

  render: function(event) {
    this.model = event || this.collection.models[0];
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
