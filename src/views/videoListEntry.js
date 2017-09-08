var VideoListEntryView = Backbone.View.extend({

  events: {
    'click .video-list-entry-title': 'handleSelect'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    // $('.video-list').append('.video-list');
    return this.$el;
  },
  handleSelect: function() {
    this.model.select();
  },
  template: templateURL('src/templates/videoListEntry.html')

});
