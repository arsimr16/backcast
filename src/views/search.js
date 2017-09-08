var SearchView = Backbone.View.extend({

  events: {
    'click button': 'handleClick'
  },

  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  },

  handleClick: function() {
    
  },

  template: templateURL('src/templates/search.html')

});
