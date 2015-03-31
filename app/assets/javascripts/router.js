// For more information see: http://emberjs.com/guides/routing/


App.Router.reopen({
	//use the AutoLocation API to get rid of hashes in our urls. We also need to set the rootURL to '/' so Ember knows where to start parsing the url from.

  location: 'auto',
  rootURL: '/'

});





App.Router.map(function() {
  // this.resource('posts');


});
