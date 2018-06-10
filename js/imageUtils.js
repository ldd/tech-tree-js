var techTree = (function(api) {
  api.setupImageUtils = function setupImageUtils(container) {
    container
      .append("filter")
      .attr("id", "desaturate")
      .append("feColorMatrix")
      .attr("type", "matrix")
      .attr(
        "values",
        "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"
      );

    var shadow = container
      .append("filter")
      .attr("id", "dropshadow")
      .attr("filterUnits", "userSpaceOnUse")
      .attr("color-interpolation-filters", "sRGB")
      .attr("height", "130%")
      .append("feGaussianBlur")
      .attr("stdDeviation", "2")
      .append("feComponentTransfer")
      .attr("in", "SourceAlpha")
      .append("feFuncR")
      .attr("type", "discrete")
      .attr("tableValues", "0");
    shadow
      .append("feOffset")
      .attr("dx", "2")
      .attr("dy", "2")
      .attr("result", "offsetblur")
      .append("feMerge")
      .append("feMergeNode")
      .attr("in", "SourceGraphics");
    //.append("feMergeNode");

    if (api.settings.useSpriteSheet) {
      var offset;
      Object.keys(api.offsets).forEach(function(offsetKey) {
        offset = api.offsets[offsetKey];
        d3.select("svg")
          .append("clipPath")
          .attr("id", "clip-" + offsetKey)
          .append("rect")
          .attr("x", offset.x)
          .attr("y", offset.y)
          .attr("width", offset.w)
          .attr("height", offset.h);
      });
    }
  };
  return api;
})(techTree || {});
