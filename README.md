tech-tree-js 
===
# Demo
Please check out the demo by visiting [https://ldd.github.io/tech-tree-js](https://ldd.github.io/tech-tree-js)

## Features
- use a TexturePacker spritesheet or individual images
- horizontal, vertical and even radial tech trees
- multiple parents for a single technology

## Usage
### in the browser
Download the [minified file](dist/js/techtree.min.js.map) and optinally, the [source map](dist/js/techtree.min.js.map). Include the minified file and the dependencies in your html file 
```
    <script src="lib/d3.min.js"></script>
    <script src="lib/saveSvgAsPng.min.js"></script>
    <script src="js/techTree.min.js"></script>
```


## Building and running

To build, be sure you have [```node```](http://nodejs.org) and ```npm``` installed.

Ideally, you should also have ```gulp``` installed globally.

Clone the directory using git:

    git clone https://github.com/ldd/techtreejs

Install dependencies:

    npm install

Build:

    gulp

Art used
===
Art assets used under the [CC-BY 3.0 License](https://creativecommons.org/licenses/by/3.0/)

- J. W. Bjerk (eleazzaar) -- www.jwbjerk.com/art  -- find this and other open art at: [http://opengameart.org](http://opengameart.org)
- Henrique Lazarini -- [ails.deviantart.com](ails.deviantart.com)

Software libraries used
===

Libraries used under the [MIT License](http://www.opensource.org/licenses/mit-license.php)
- d3
- saveSvgAsPng

Copyright (C) 2014 ldd
