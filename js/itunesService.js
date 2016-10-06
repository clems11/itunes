angular.module('itunes').service('itunesService', function($http, $q){
  //This service is what will do the 'heavy lifting' and get our data from the iTunes API.
  //Also note that we're using a 'service' and not a 'factory' so all your methods you want to call in your controller need to be on 'this'.
    var baseUrl = "https://itunes.apple.com/search?term="
    var songData = [];

     this.getSongs = function (artist) {
       return $http ({
                  method: 'JSONP',
                  url: ('https://itunes.apple.com/search?term=' + artist + '&limit=10' + '&callback=JSON_CALLBACK')
                })
      };



      // this.filterData = function(newArray) {
      //   var key = newArray[i];
      //   for (var i = 0; i < newArray.length; i++) {
      //     console.log(key.trackName);
      //   }
      // }

        //    var objProp = objData[i];
        // //    for (var i = 0; i < objData.length; i++) {
        // //      songInfo.push(objProp.trackName) //+ ", " + objProp.artistName + ", " + objProp.collectionName + ", " + objProp.kind);
        // //    }
        // //



  //Write a method that accepts an artist's name as the parameter, then makes a 'JSONP' http request to a url that looks like this
  //https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
  //Note that in the above line, artist is the parameter being passed in.
  //You can return the http request or you can make your own promise in order to manipulate the data before you resolve it.

    //Code here

});
