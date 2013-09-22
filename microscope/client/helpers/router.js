Meteor.Router.add({
  '/': 'postsList',
  '/posts/:_id': {
    to: 'postPage',   //maps to template name, in this case, postPage (doubles as name of our route)
    and: function(id) { Session.set('currentPostId', id); }	//auxiliary function sets Session variable 'currentPostId' to the id pulled out of url
  },
  '/submit': 'postSubmit'
});
Meteor.Router.filters({
  'requireLogin': function(page) {
    if (Meteor.user())
      return page;
    else if (Meteor.loggingIn())
      return 'loading';
    else
      return 'accessDenied';
  }
});
Meteor.Router.filter('requireLogin', {only: 'postSubmit'});
