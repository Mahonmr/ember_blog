import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveNewPost( params ) {
      var newPost = this.store.createRecord("post", params);
      newPost.save( );
      this.transitionTo('index');
    }
  }
});
