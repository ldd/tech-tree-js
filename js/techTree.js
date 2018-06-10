var techTree = (function(api) {
  var svg, linksData, nodesByName, nodesDataMap;

  var depths = {};
  api._clear = function _clear() {
    linksData = [];
    nodesByName = {};
    nodesDataMap = {};
    depths = {};
  };
  api.deleteTree = function deleteTree() {
    d3.select(api.settings.wrapper)
      .select("svg")
      .remove();
    api._clear();
  };
  api.appendSVG = function appendSVG() {
    var top = api.dimensions.margin.top;
    var left = api.dimensions.margin.left;
    api.dimensions.svgWidth =
      api.dimensions.svgInitialWidth - api.dimensions.margin.right - left;
    api.dimensions.svgHeight =
      api.dimensions.svgInitialHeight - api.dimensions.margin.bottom - top;
    svg = d3
      .select(api.settings.wrapper)
      .append("svg")
      .attr("width", api.dimensions.svgWidth)
      .attr("height", api.dimensions.svgHeight)
      .append("g")
      .attr("transform", "translate(" + left + "," + top + ")");
  };
  api.parseNodesData = function parseNodesData() {
    var nodesData = api.nodesData;
    nodesData.forEach(function(nodeData) {
      nodesDataMap[nodeData.name] = nodeData;
    });

    nodesData.forEach(function(nodeData) {
      depths[nodeData.depth] = depths[nodeData.depth] + 1 || 1;
      nodeData.requirements = nodeData.requirements || [];
      nodeData.requirements.forEach(function(r) {
        linksData.push({
          source: nodesDataMap[r],
          target: nodeData
        });
      });
      nodeData._depthElementCount = depths[nodeData.depth];
    });
    nodesData.forEach(function(d) {
      api.orientNodes(d, depths);
    });
  };
  api.createTree = function createTree(jsonNodesData, settings, offsets) {
    api._clear();
    api.nodesData = jsonNodesData;
    api.loadSettings(settings);
    api.loadOffsets(offsets);
    api.appendSVG();
    api.setupImageUtils(svg);
    api.parseNodesData();

    var w = api.dimensions.nodeInnerWidth + 2 * api.dimensions.nodeInnerBorder;
    var h = api.dimensions.nodeInnerHeight + 2 * api.dimensions.nodeInnerBorder;
    d3.layout
      .force()
      .nodes(d3.values(api.nodesData))
      .links(linksData)
      .size([w, h])
      .start();

    api.init();
    api.nodesData.forEach(function(d) {
      if (!d.requirements || d.requirements.length < 1 || d.selected) {
        nodesByName[d.name]
          .select("rect")
          .style("fill", "#ffcf70")
          .style("stroke", "#FFBB33");
      }
    });
  };
  api.init = function init() {
    // initialize the nodes
    var nodes = svg.selectAll("g.node").data(api.nodesData);
    api.initializeNodes(nodes, nodesByName);

    // initialize the links
    var links = svg.selectAll("path.link").data(linksData, function(d) {
      return d.source.name + "-" + d.target.name;
    });
    api.initializeLinks(links);
  };
  return api;
})(techTree || {});
