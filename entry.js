require("./styles.less");

// Import the API key module...
import apiKey from "./modules/apiKey";
import xhrUtils from "./modules/utils/xhr";
import MovieList from "./modules/widgets/MovieList";

// Simple test that the key has been configured, this will be improved...
var d = document.createElement("section");
if (apiKey.key)
{
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