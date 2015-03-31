// app/assets/javascripts/store.js

//tell Ember to prepend all API requests with api/v1/, as we’ll be versioning our API
DS.RESTAdapter.reopen({
  namespace: 'api/v1'
})

// The Active Model Adapter enables Ember to communicate with your Rails backend through Active Model Serializers. Normally you would need to include the active_model_serializers gem, but Ember Rails already has it a as a dependency.

App.Store = DS.Store.extend({});
App.ApplicationAdapter = DS.ActiveModelAdapter.extend({});


