//Importing features into your script
//Once you've exported some features out of your module, you need to import them into your script to be able to use them. The simplest way to do this is as follows:
//You use the import statement, followed by a comma-separated list of the features you want to import wrapped in curly braces, followed by the keyword from, followed by the module specifier.
//The module specifier provides a string that the JavaScript environment can resolve to a path to the module file.
// js-examples/module-examples/basic-modules/modules/square.js Becomes ./modules/square.js
// Note: The imported values are read-only views of the features that were exported. Similar to const variables, you cannot re-assign the variable that was imported, but you can still modify properties of object values. 
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
const myCanvas = create("myCanvas", document.body, 480, 320);
const reportList = createReportList(myCanvas.id);
const square = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square.length, reportList);
reportPerimeter(square.length, reportList);