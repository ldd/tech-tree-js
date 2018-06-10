var techTree = (function(api) {
  api.createTreeFromJSON = function(config) {
    d3.json(config.offsetsFileName, function(error, jsonOffsets) {
      if (error) {
        return console.warn(error);
      }
      d3.json(config.dataFileName, function(error, json) {
        if (error) {
          return console.warn(error);
        }
        d3.json(config.settingsFileName, function(error, settings) {
          if (error) {
            return console.warn(error);
          }
          techTree.createTree(json.nodes, settings, jsonOffsets);
        });
      });
    });
  };

  return api;
})(techTree || {});
