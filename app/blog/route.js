import Ember from 'ember';

const {
  Route,
  set
} = Ember;

export default Route.extend({
  model() {
    return this.store.createRecord('post', {
      title: 'Tutorial blog post',
      author: 'This Guy',
      content: 'Some content, right'
    });
  },

  setupController(controller, model) {
    //Instead of Ember.set(), we can just use set() because of destructuring
    //This set() below will set the model for this route as "post"
    set(controller, 'post', model);
  }
});
