import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  model() {
    return this.store.createRecord('post', {
      title: 'Tutorial blog post',
      author: 'This Guy',
      content: 'Some content, right'
    });
  }
});
