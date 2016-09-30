require("./SearchBox.less");

/**
 * This widget can be used for capturing text to trigger movie searches.
 */
class SearchBox {

   /**
    * 
    * 
    * @param {object} input The data with which to construct the SearchBox
    * @return {SearchBox} A new SearchBox
    */
   constructor(input) {
      // Nothing yet
   }

   /**
    * Generates a DocumentFragment containing the search box
    * 
    * @return {DocumentFragment} DocumentFragment containing an HTML input field
    */
   generateElements() {
      var fragment = document.createDocumentFragment();
      var input = document.createElement("input");
      input.className = "SearchBox";
      input.placeholder = "Search for movies...";
      fragment.appendChild(input);
      return fragment;
   }
}

export default SearchBox;