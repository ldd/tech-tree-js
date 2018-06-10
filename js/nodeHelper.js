var techTree = (function(api) {
  var initializeBorder = function initializeBorder(container) {
    container
      .append("rect")
      .attr(
        "width",
        api.dimensions.nodeInnerWidth + 2 * api.dimensions.nodeInnerBorder
      )
      .attr(
        "height",
        api.dimensions.nodeInnerHeight + 2 * api.dimensions.nodeInnerBorder
      )
      .style("filter", api.settings.useShadows ? "url(#dropshadow)" : "");
  };
  var initializeImages = function initializeImages(container) {
    var offset;
    var image = container
      .append("svg")
      .attr("viewBox", function(d) {
        if (api.settings.useSpriteSheet) {
          offset = api.offsets[d.name] || api.offsets.default;
          return "0 0 " + offset.w + " " + offset.h;
        } else {
          return (
            "0 0 " +
            api.dimensions.nodeInnerWidth +
            " " +
            api.dimensions.nodeInnerHeight
          );
        }
      })
      .attr("preserveAspectRatio", "xMidYMid meet")
      .attr("x", api.dimensions.nodeInnerBorder)
      .attr("y", api.dimensions.nodeInnerBorder)
      .attr("width", api.dimensions.nodeInnerWidth)
      .attr("height", api.dimensions.nodeInnerHeight)
      .append("image")
      .attr("image-rendering", api.settings.imageRendering)
      .attr("xlink:href", function(d) {
        if (api.settings.useSpriteSheet) {
          return (
            api.settings.imageFolderName +
            "/" +
            api.settings.spriteSheetFileName
          );
        } else {
          return api.settings.imageFolderName + "/" + d.name + ".png";
        }
      })
      .attr("x", 0)
      .attr("y", 0)
      .attr(
        "width",
        api.settings.useSpriteSheet
          ? api.dimensions.spriteSheetWidth
          : api.dimensions.nodeInnerWidth
      )
      .attr(
        "height",
        api.settings.useSpriteSheet
          ? api.dimensions.spriteSheetHeight
          : api.dimensions.nodeInnerHeight
      )
      .style("filter", function(pNode) {
        return pNode.selected ? "" : "url(#desaturate)";
      });
    //if needed
    if (api.settings.useSpriteSheet) {
      image
        .attr("clip-path", function(d) {
          return "url(#clip-" + d.name + ")";
        })
        .attr("transform", function(d) {
          offset = api.offsets[d.name] || api.offsets.default;
          return "translate(-" + offset.x + ",-" + offset.y + ")";
        });
    }
  };
  api.initializeNodes = function initializeNodes(nodes, nodesByName) {
    nodes
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("id", function(pNode, c) {
        nodesByName[pNode.name] = d3.select(this);
        return c;
      })
      .on("click", function(pNode) {
        return api.clickHandler(pNode, nodesByName);
      })
      // Transition nodes to their new position.
      .attr("transform", function(d) {
        return "translate(" + d.x + "," + d.y + ")";
      });

    initializeBorder(nodes);
    initializeImages(nodes);
  };
  api.updateNode = function updateNode(node) {
    node
      .transition()
      .duration(api.durations.activateNode)
      .select("rect")
      .style("fill", "#ffcf70")
      .style("stroke", "#FFBB33");
    node.select("image").style("filter", "");
  };
  return api;
})(techTree || {});
