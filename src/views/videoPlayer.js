var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.render();
    this.collection.on('select', this.render, this);
  },

  render: function(event) {
    this.model = event || this.collection.models[0];
    if(this.model) {
      this.$el.html(this.template(this.model.attributes));
      // $(this.$el).appendTo('.player');
    } else {
      this.$el.html('<div>Loading...</div>');
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
