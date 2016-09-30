import apiKey from "../apiKey";

var xhrUtils = {


   /**
    * This function can be used to search The Movie DB for movies using a
    * query supplied in the input object.
    * 
    * @param  {object} input Input parameters for the movie search
    * @param  {string} input.query The query to use to search for movies
    * @return {Promise} A promise of the search results
    */
   getMovies: function(input) {
      var queryStr = input.query || "*";

      var promise = new Promise(function (resolve, reject) {
         var data = JSON.stringify({});

         var xhr = new XMLHttpRequest();
         xhr.withCredentials = false;
         xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {

               if (this.responseText)
               {
                  var results = JSON.parse(this.responseText);
                  resolve(results);
               }
               else
               {
                  reject("No response");
               }
            }
         });
         xhr.onerror = function() {
            reject(this.statusText);
         };

         var url = `https://api.themoviedb.org/3/search/movie?language=en-US&api_key=${apiKey.key}&query=${queryStr}`;
         xhr.open("GET", url);
         xhr.send(data);
      });
      return promise;
   }
};

export default xhrUtils;

