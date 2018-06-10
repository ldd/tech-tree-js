var techTree = (function(api) {
  // Toggle children on click.
  api.clickHandler = function clickHandler(d, nodesByName) {
    if (!d.selected) {
      var otherSelected = true;
      if (d.requirements && d.requirements.length) {
        for (var i = 0; i < d.requirements.length; i += 1) {
          otherSelected =
            otherSelected &&
            nodesByName[d.requirements[i]].datum().selected === true;
        }
      }
      if (otherSelected) {
        d.selected = true;
        techTree.updateNode(nodesByName[d.name]);
        techTree.updateLinks(d, nodesByName);
      }
    }
  };
  d3.select(api.settings.downloadWrapper).on("click", function() {
    saveSvgAsPng(d3.select("svg").node(), api.settings.imageDownloadFileName);
  });
  return api;
})(techTree || {});
