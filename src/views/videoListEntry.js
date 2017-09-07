var VideoListEntryView = Backbone.View.extend({
  events: {
    'click .video-list-entry-title': 'handleSelect'
  },

  initialize: function() {
    this.render();
    // this.video = new Video(video);
  },

  render: function() {
    console.log('attributes', this.model.attributes);
    // console.log('HTML', this.template(this.model.attributes));
    this.$el.html(this.template(this.model.attributes));
    $(this.$el).appendTo('.video-list');
    return this;
  },

  handleSelect: function(e) {
    this.model.select();
  },
  template: templateURL('src/templates/videoListEntry.html')

});
