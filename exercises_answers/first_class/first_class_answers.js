require('../../support/FunctionalJS/functional').expose();
require('../stubs');

module.exports = function(){

  // Exercise 1
  // ============
  
  var getComments = function(callback) {
    ajax.get('/comments', callback);
  }
  
  
  // Exercise 2
  // ============
  
  var getPosts = function() {
    db.find('posts', Views.Post.index);
  }
  
  
  // Exercise 3
  // ============
  
  var renderPage = Page.render;


  // Bonus
  // ============
  
  var saveAndUploadTweets = function(tweets) {
    File.write('tweets', JSON.stringify(tweets), Http.upload);
  }
  
  var twitterSave = function() {
    Twitter.getTweets('@drboolean', saveAndUploadTweets);
  }
  
  
  return {
    getComments: getComments,
    getPosts: getPosts,
    renderPage: renderPage,
    twitterSave: twitterSave
  }
}
