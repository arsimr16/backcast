var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.template(this.model.models[0].attributes));
    $(this.$el).appendTo('.player');
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
