var app = angular.module('reddit', ['ngMdIcons', 'angularMoment', 'ngMessages']);

app.constant('angularMomentConfig', {
    preprocess: 'unix', // optional
    // timezone: 'Europe/London' // optional
});


app.filter('fromNow', function() {
    return function(dateString) {
      return moment(dateString).fromNow();
    };
  });

app.controller('Posts', function ($scope) {
  $scope.showForm = false;
  $scope.showAddComment = false;
  $scope.showComments = false;
  $scope.formSubmitted = false;
  $scope.showErrors = true;

  $scope.upVote = function (post) {
    post.voteCount++;
  };

  $scope.downVote = function (post) {
    post.voteCount--;
  };

  $scope.toggleForm = function () {
    $scope.showForm = !$scope.showForm;
  };

  $scope.toggleAddComment = function () {
    $scope.showAddComment = !$scope.showAddComment;
  };

  $scope.toggleShowComments = function () {
    $scope.showComments = !$scope.showComments;
  };
  //
  // $scope.isInvalid = function (field) {
  //   if (field === '') {
  //     field.valid = false;
  //   }
  // };

  $scope.addPost = function (isValid) {
    $scope.formSubmitted = true;
    if (isValid) {
    $scope.posts.push({
      title: $scope.title,
      author: $scope.author,
      imgUrl: $scope.imgUrl,
      description: $scope.description,
      voteCount: 0,
      datePosted: new Date(),
      comments: [],
    });
    $scope.title = '';
    $scope.author = '';
    $scope.imgUrl = '';
    $scope.description = '';
    $scope.formSubmitted = false;
    $scope.showErrors = false;
    $scope.toggleForm();
    }
  };

  $scope.addComment = function (post) {
    post.comments.push({
      author: $scope.commentAuthor,
      comment: $scope.comment
    });
    $scope.commentAuthor = '';
    $scope.comment = '';
    $scope.toggleAddComment();
    $scope.toggleShowComments();
  };

  $scope.posts=[
    {
      title: 'pups in a row',
      author: 'puppup',
      imgUrl: 'http://www.eveshamvet.com/wp-content/uploads/2015/06/Evesham-Veterinary-Clinic-Marlton-NJ-Puppies.jpg',
      description: 'zomgpuppies',
      voteCount: 0,
      datePosted: '2014-12-25',
      comments: [],
    },
    {
      title: 'collar pup',
      author: 'puppup',
      imgUrl: 'http://media.mydogspace.com.s3.amazonaws.com/wp-content/uploads/2013/08/puppy-500x350.jpg',
      description: 'i think your collar is too big',
      voteCount: 0,
      datePosted: '2015-08-22',
      comments: [],
    },
    {
      title: 'sir pup',
      author: 'puppup',
      imgUrl: 'http://cdn.sheknows.com/articles/2013/04/Photo_1.jpg',
      description: 'i say, that is sir pup to you',
      voteCount: 0,
      datePosted: '2015-05-09',
      comments: [{
        author: 'm.ils esq',
        comment: 'pip pip frosted mini wheat'
      },
      {
        author: 'wentworth',
      comment: 'would you like some tea m\'poops?'
      }
      ],
    },
  ];
});
