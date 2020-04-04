tech-tree-js 
===
![tech tree example](https://user-images.githubusercontent.com/1187476/30304466-a83803f6-973b-11e7-85ec-88988919b151.png)

# Update
If you use react, consider taking a look at my library [react-tech-tree](https://github.com/ldd/react-tech-tree). It has support for tooltips, styling, etc.


# Demo
Please check out the demo by visiting [https://ldd.github.io/tech-tree-js](https://ldd.github.io/tech-tree-js)

![activating a tech node](https://user-images.githubusercontent.com/1187476/30272962-f4513da6-96c4-11e7-85c5-9a6eb1495eae.gif)

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

Run a webserver

    gulp serve

Then open a browser and go to [localhost:8000](http://localhost:8000) to see the site.


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

Copyright (C) 2017 ldd
