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
      this.callback = input.callback;
   }

   /**
    * Generates a DocumentFragment containing the search box
    * 
    * @return {DocumentFragment} DocumentFragment containing an HTML input field
    */
   generateElements() {
      var fragment = document.createDocumentFragment();
      this.input = document.createElement("input");
      this.input.className = "SearchBox";
      this.input.placeholder = "Search for movies...";

      this.input.addEventListener("keyup", evt => this.onKeyUp(evt));

      fragment.appendChild(this.input);
      return fragment;
   }

   onKeyUp(evt) {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
         this.useInput();
      }, 500);
   }

   useInput() {
      this.callback(this.input.value);
   }
}

export default SearchBox;