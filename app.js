angular.module('happyApp',[])

.controller('HappyController',function($http){
  var happy = this;
  var i = -1, query= '';

  happy.science=false;
  happy.pref=false;
  happy.prefCounter = false;
  happy.prefAnimal = false;

  happy.fetch = function(){
  if(!happy.prefAnimal){
    query = 'cute+animals';
  } else{
    query = happy.prefAnimal;
  }
  $http({
    method: 'GET',
    url: 'https://api.giphy.com/v1/gifs/search?q='+ query + '&api_key=dc6zaTOxFJmzC&limit=100'
    }).then(function successCallback(response) {
	     i++;
       happy.id=response.data.data[i].id;
       console.log(query);
      }, function errorCallback(response) {

      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  } 



});
