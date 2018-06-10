var techTree = (function(api) {
  //offsets
  api.offsets = api.offsets || {};

  //defaults
  api.settings = {
    wrapper: "#svg",
    downloadWrapper: "#save",
    nodeOrientation: "vertical",
    //linkOrientation: "",
    imageRendering: "pixelated",
    imageDownloadFileName: "taco.png",
    useSpriteSheet: false,
    spriteSheetFileName: "spritesheet.png",
    imageFolderName: "images/high_res",
    useShadows: true,
    initialLinkColor: "none"
  };

  api.dimensions = {
    svgInitialWidth: window.innerWidth,
    svgInitialHeight: window.innerHeight,
    nodeOuterWidth: 120,
    nodeOuterHeight: 120,
    nodeInnerBorder: 2,
    nodeInnerWidth: 64,
    nodeInnerHeight: 64,
    spriteSheetWidth: 512,
    spriteSheetHeight: 512,
    margin: { top: 20, right: 0, bottom: 20, left: 0 }
  };
  api.durations = {
    activateLink: 750,
    activateNode: 250
  };
  api.loadSettings = function(settings) {
    var newSettings = settings || {};
    //general settings
    newSettings.settings = newSettings.settings || {};
    Object.keys(api.settings).forEach(function(key) {
      if (newSettings.settings[key] != null) {
        api.settings[key] = newSettings.settings[key];
      }
    });
    //dimensions
    newSettings.dimensions = newSettings.dimensions || {};
    Object.keys(api.dimensions).forEach(function(key) {
      api.dimensions[key] = newSettings.dimensions[key] || api.dimensions[key];
    });
    //durations
    newSettings.durations = newSettings.durations || {};
    api.durations.activateLink =
      newSettings.durations.activateLink || api.durations.activateLink;
    api.durations.activateNode =
      newSettings.durations.activateNode || api.durations.activateNode;
  };
  api.loadOffsets = function loadOffsets(offsets) {
    api.offsetsData = offsets;
    offsets.frames.forEach(function(offset) {
      api.offsets[offset.filename] = offset.frame;
    });
    api.offsets.default = api.offsets.default || offsets.frames[0].frame;
    api.dimensions.spriteSheetWidth = offsets.meta.size.w;
    api.dimensions.spriteSheetHeight = offsets.meta.size.h;
  };
  return api;
})(techTree || {});
