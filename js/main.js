var THREE = require('three'),
    World = require('three-world'),
    CSS3D = require('./css3d'),
    Animation = require('./animation'),
    OBJLoader = require('./objloader'),
    OBJMTLLoader = require('./objmtlloader'),
    WebcamTexture = require('./webcam-texture');

// Allow cross-origin texture loading
THREE.ImageUtils.crossOrigin = '';

function render() {
  // Rendering, updating the world
}

World.init({camDistance: 100, renderCallback: render});

// Add things to the world

var box = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10),
  new THREE.MeshLambertMaterial({color: 0xff0000})
);

World.add(box);

World.start();
