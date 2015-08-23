var app = angular.module('reddit', ['ngMdIcons']);

app.controller('Posts', function ($scope) {
  $scope.posts=[
    {
      title: 'pups in a row',
      author: 'puppup',
      imgUrl: 'http://www.eveshamvet.com/wp-content/uploads/2015/06/Evesham-Veterinary-Clinic-Marlton-NJ-Puppies.jpg',
      description: 'zomgpuppies',
      voteCount: null,
      datePosted: new Date(),
      comments: [],
      // commentCount: this.comments.length
    },
    {
      title: 'collar pup',
      author: 'puppup',
      imgUrl: 'http://media.mydogspace.com.s3.amazonaws.com/wp-content/uploads/2013/08/puppy-500x350.jpg',
      description: 'i think your collar is too big',
      voteCount: null,
      datePosted: new Date(),
      comments: [],
      // commentCount: this.comments.length
    },
    {
      title: 'sir pup',
      author: 'puppup',
      imgUrl: 'http://cdn.sheknows.com/articles/2013/04/Photo_1.jpg',
      description: 'i say, that is sir pup to you',
      voteCount: null,
      datePosted: new Date(),
      comments: [],
      // commentCount: this.comments.length
    },
  ];
});
