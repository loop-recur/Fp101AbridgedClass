require('../../support/FunctionalJS/functional').expose();
require('../stubs');

module.exports = function(){

  // Exercise 1
  // ============
  
  var getComments = function(callback) {
    ajax.get('/comments', function(comments){
      callback(comments);
    });
  }
  

  // Exercise 2
  // ============
  
  var getPosts = function() {
    db.find('posts', function(posts) {
      Views.Post.index(posts);
    });
  }
  
  
  // Exercise 3
  // ============
  
  var renderPage = function(content, callback) {
    Page.render(content, function(){
      callback();
    })
  }
  

  // Bonus
  // ============
  
  var twitterSave = function() {
    Twitter.getTweets('@drboolean', function(tweets){
      File.write('tweets', JSON.stringify(tweets), function(file) {
        Http.upload(file);
      });
    });
  }
  
  return {
    getComments: getComments,
    getPosts: getPosts,
    renderPage: renderPage,
    twitterSave: twitterSave
  }
}
