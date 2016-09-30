define(function (require) {
   var registerSuite = require("intern!object");
   var assert = require("intern/chai!assert");

   registerSuite({
      name: "Basic Tests",

      "Movie list items loaded": function () {
         return this.remote.get(require.toUrl("http://localhost:8080/index.html"))
            .setFindTimeout(5000)
            .findDisplayedByCssSelector(".MovieList__item");
        }
    });
});