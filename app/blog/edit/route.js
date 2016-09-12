import Ember from 'ember';

const {
  Route,
  set,
  get
} = Ember;

export default Route.extend({
  setupController(controller, model) {
    //set(controller, 'model', context);
    set(controller, 'post', model);
    set(controller, 'editable', true);
  },

  actions: {
    goBackToIndex() {
      this.transitionTo('blog.index');
    },

    toggleEdit() {
      //We can't simply use get(this, 'editable')
      //because 'editable' is a property set on our controller, not on our route
      //A controller controls what is accessible on our template
      this.controller.toggleProperty('editable');
    }
  }
});
