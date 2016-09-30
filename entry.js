require("./styles.less");

import apiKey from "./modules/apiKey";
import xhrUtils from "./modules/utils/xhr";
import SearchBox from "./modules/widgets/SearchBox";
import MovieList from "./modules/widgets/MovieList";

// Simple test that the key has been configured, this will be improved...
var d = document.createElement("section");
if (apiKey.key)
{
   var lastResults;
   var search = function(term) {

      lastResults && d.lastChild.remove();

      xhrUtils.getMovies({
         query: term
      }).then(function(data) {
         
         var movieList = new MovieList({
            movies: data.results
         });

         var listElements = movieList.generateElements();
         lastResults = d.appendChild(listElements);
      });
   };

   var searchBox = new SearchBox({
      callback: search
   });
   var searchBoxElements = searchBox.generateElements();
   d.appendChild(searchBoxElements);

   
}
else
{
   d.appendChild(document.createTextNode("No API Key Configured"));
}
document.getElementById("MAIN").appendChild(d);