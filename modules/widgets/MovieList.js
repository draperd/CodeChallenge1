require("./MovieList.less");

/**
 * This widget can be used for rendering a list of movies.
 */
class MovieList {

   /**
    * Used to create a new MovieList instance.
    * 
    * @param {object} input The data with which to construct the MovieList
    * @param {object[]} input.movies An array of the movies to render
    * @param {element} input.targetElement The target element in which to render the movies
    * @return {MovieList} A new MovieList
    */
   constructor(input) {
      this.movies = input.movies || [];
      this.targetElement = input.targetElement;
   }

   /**
    * Generates a DocumentFragment containing a list of movie titles.
    * 
    * @return {DocumentFragment} DocumentFragment containing an HTML list
    */
   generateElements() {
      // Create a new fragment containing an HTML list (which we'll always return
      // regardless of whether or not it has any items). We're using a document fragment 
      // to save the browser updating the DOM tree until absolutely necessary...
      var fragment = document.createDocumentFragment();
      var list = document.createElement("ul");
      list.className = "MovieList";
      fragment.appendChild(list);

      if (Array.isArray(this.movies))
      {
         for (let movie of this.movies)
         {
            var item = document.createElement("li");
            item.innerText = movie.original_title;
            item.className = "MovieList__item";
            list.appendChild(item);
         }
      }
      return fragment;
   }
}

export default MovieList;