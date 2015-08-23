var app = angular.module('reddit', ['ngMdIcons', 'angularMoment']);

app.constant('angularMomentConfig', {
    preprocess: 'unix', // optional
    // timezone: 'Europe/London' // optional
});

app.controller('Posts', function ($scope) {
  $scope.posts=[
    {
      title: 'pups in a row',
      author: 'puppup',
      imgUrl: 'http://www.eveshamvet.com/wp-content/uploads/2015/06/Evesham-Veterinary-Clinic-Marlton-NJ-Puppies.jpg',
      description: 'zomgpuppies',
      voteCount: 0,
      datePosted: '2014-12-25',
      comments: [],
      // commentCount: this.comments.length
      commentCount: 1
    },
    {
      title: 'collar pup',
      author: 'puppup',
      imgUrl: 'http://media.mydogspace.com.s3.amazonaws.com/wp-content/uploads/2013/08/puppy-500x350.jpg',
      description: 'i think your collar is too big',
      voteCount: 0,
      datePosted: '2015-08-22',
      comments: [],
      // commentCount: this.comments.length
      commentCount: 0

    },
    {
      title: 'sir pup',
      author: 'puppup',
      imgUrl: 'http://cdn.sheknows.com/articles/2013/04/Photo_1.jpg',
      description: 'i say, that is sir pup to you',
      voteCount: 0,
      datePosted: '2015-05-09',
      comments: [],
      // commentCount: this.comments.length
      commentCount: 0
    },
  ];
  $scope.upVote = function (post) {
    post.voteCount++;
  };
  $scope.downVote = function (post) {
    post.voteCount--;
  };
});

app.filter('fromNow', function() {
    return function(dateString) {
      return moment(dateString).fromNow();
    };
  });
