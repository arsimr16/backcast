var VideoListEntryView = Backbone.View.extend({
  events: {
    'click .video-list-entry-title': 'handleSelect'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    $(this.$el).appendTo('.video-list');
    return this;
  },
  handleSelect: function() {
    this.model.select();
  },
  template: templateURL('src/templates/videoListEntry.html')

});
