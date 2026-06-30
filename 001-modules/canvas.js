//The first thing you do to get access to module features is export them. This is done using the export statement.
//The easiest way to use it is to place it in front of any items you want exported out of the module, for example: export const name = "canvas";
//You can export functions, var, let, const, and — as we'll see later — classes. They need to be top-level items: for example, you can't use export inside a function.
function create(id, parent, width, height) {
  let divWrapper = document.createElement('div');
  let canvasElem = document.createElement('canvas');
  parent.appendChild(divWrapper);
  divWrapper.appendChild(canvasElem);

  divWrapper.id = id;
  canvasElem.width = width;
  canvasElem.height = height;

  let ctx = canvasElem.getContext('2d');

  return {
    ctx: ctx,
    id: id
  };
}

function createReportList(wrapperId) {
  let list = document.createElement('ul');
  list.id = wrapperId + '-reporter';

  let canvasWrapper = document.getElementById(wrapperId);
  canvasWrapper.appendChild(list);

  return list.id;
}
//A more convenient way of exporting all the items you want to export is to use a single export statement at the end of your module file, followed by a comma-separated list of the features you want to export wrapped in curly braces. For example: export { create, createReportList };
export { create, createReportList };