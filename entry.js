require("./styles.less");

// Import the API key module...
import apiKey from "./modules/apiKey";

// Simple test that the key has been configured, this will be improved...
var d = document.createElement("div");
if (apiKey.key)
{
   d.appendChild(document.createTextNode("API Key is: " + apiKey));
}
else
{
   d.appendChild(document.createTextNode("No API Key Configured"));
}
document.getElementById("BODY").appendChild(d);