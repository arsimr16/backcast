var SearchView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.template());
    $(this.$el).appendTo('.search');
    return this;
  },

  template: templateURL('src/templates/search.html')

});
