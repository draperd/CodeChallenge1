require("./styles.less");

import apiKey from "./modules/apiKey";
import xhrUtils from "./modules/utils/xhr";
import SearchBox from "./modules/widgets/SearchBox";
import MovieList from "./modules/widgets/MovieList";

// Simple test that the key has been configured, this will be improved...
var d = document.createElement("section");
if (apiKey.key)
{
   var searchBox = new SearchBox();
   var searchBoxElements = searchBox.generateElements();
   d.appendChild(searchBoxElements);

   xhrUtils.getMovies({
      query: "lego"
   }).then(function(data) {
      
      var movieList = new MovieList({
         movies: data.results
      });

      var listElements = movieList.generateElements();
      d.appendChild(listElements);
   });
}
else
{
   d.appendChild(document.createTextNode("No API Key Configured"));
}
document.getElementById("MAIN").appendChild(d);