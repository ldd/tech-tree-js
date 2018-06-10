var techTree = (function(api) {
  var linksBySource = {};

  api.initializeLinks = function initializeLinks(links) {
    links
      .enter()
      .insert("path", "g")
      .attr("class", "link")
      .attr("id", function(pLink) {
        linksBySource[pLink.source.name] =
          linksBySource[pLink.source.name] || [];
        linksBySource[pLink.source.name].push(d3.select(this));
        return pLink.source.name + "-" + pLink.target.name;
      })
      .attr("d", api.lineFunction)
      .style("stroke", function(pLink) {
        return pLink.source.selected
          ? "#FFBB33"
          : api.settings.initialLinkColor;
      });
  };
  api.updateLinks = function updateLinks(node, nodesByName) {
    var links = linksBySource[node.name];
    if (links && links.length) {
      for (var i = 0; i < links.length; i += 1) {
        links[i]
          .transition()
          .duration(api.durations.activateLink)
          .style("stroke", "#FFBB33");

        var d = links[i].datum().target;
        var name = d.name;
        var selectable = true;

        if (d.requirements) {
          for (var j = 0; j < d.requirements.length; j += 1) {
            var other = nodesByName[d.requirements[j]].datum();
            selectable = selectable && other.selected;
            d3.transition()
              .duration(api.durations.activateLink)
              .select("#" + other.name + "-" + d.name)
              .style("stroke", other.selected ? "#FFBB33" : "#ccc");
          }
        }
        if (selectable) {
          nodesByName[name]
            .transition()
            .duration(api.durations.activateLink)
            .select("rect")
            .style("stroke", "#FFBB33");
        }
      }
    }
  };
  return api;
})(techTree || {});
