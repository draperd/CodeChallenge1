require("./styles.less");

// Import the API key module...
import apiKey from "./modules/apiKey";
import xhrUtils from "./modules/utils/xhr";
import MovieList from "./modules/widgets/MovieList";

// Simple test that the key has been configured, this will be improved...
var d = document.createElement("div");
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

      // d.className = "movie-data"; // This is just temporary for the test
      // d.appendChild(document.createTextNode(text));
   });
}
else
{
   d.appendChild(document.createTextNode("No API Key Configured"));
}
document.getElementById("BODY").appendChild(d);