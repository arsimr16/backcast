var VideoListEntryView = Backbone.View.extend({
  events: {
    'click .video-list-entry-title': 'handleSelect'
  },

  initialize: function() {
    this.render();
    // this.video = new Video(video);
    console.log('this', this);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  handleSelect: function(e) {
    this.model.select();
  },
  template: templateURL('src/templates/videoListEntry.html')

});
