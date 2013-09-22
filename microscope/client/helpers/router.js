Meteor.Router.add({
  '/': 'postsList',
  '/posts/:_id': {
    to: 'postPage',   //maps to template name, in this case, postPage (doubles as name of our route)
    and: function(id) { Session.set('currentPostId', id); }	//auxiliary function sets Session variable 'currentPostId' to the id pulled out of url
  },
  '/submit': 'postSubmit'
});
