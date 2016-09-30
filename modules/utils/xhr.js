import apiKey from "../apiKey";

var xhrUtils = {

   getLegoMovies: function() {
      var promise = new Promise(function (resolve, reject) {
         var data = JSON.stringify({});

         var xhr = new XMLHttpRequest();
         xhr.withCredentials = false;
         xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
               resolve(this.responseText);
            }
         });
         xhr.onerror = function() {
            reject(this.statusText);
         };

         xhr.open("GET", "https://api.themoviedb.org/3/search/movie?language=en-US&api_key=" + apiKey.key + "&query=lego");
         xhr.send(data);
      });
      return promise;
   }
};

export default xhrUtils;

