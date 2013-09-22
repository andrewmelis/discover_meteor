Posts = new Meteor.Collection('posts');	//omitting var bc want global scope for Posts
Posts.allow({
  insert: function(userId, doc) {
    //only allow posting if you are logged in
    return !! userId;
  }
});

