define(function (require) {
   var registerSuite = require("intern!object");
   var assert = require("intern/chai!assert");

   registerSuite({
      name: "Basic Tests",

      "No API Key Message": function () {
         return this.remote.get(require.toUrl("http://localhost:8080/index.html"))
            .findByCssSelector("div")
               .getVisibleText()
               .then(function(text) {
                  assert.equal(text, "No API Key Configured");
               });
        }
    });
});