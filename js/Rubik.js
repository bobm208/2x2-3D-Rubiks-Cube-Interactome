var scene, camera, renderer, dirLight;
var rubiksCube;
var moveLog;

function cube(container) {
	
	moveLog = document.getElementsByName('movelog')[0];
	rubiksCube = new THREE.Object3D();
	var width = container.attributes[1].nodeValue;
	var height = container.attributes[2].nodeValue;
	
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
	renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x808080, 1.0);
    renderer.setSize(width, height);
	
	// const axisHelper = new THREE.AxisHelper( 20 );
	// scene.add( axisHelper );
	scene.add(rubiksCube);
	scene.add(new THREE.AmbientLight(0xffffff));
	
	buildRubiksCube();
	
	var cubeMaterial = new THREE.MeshLambertMaterial();
	cubeMaterial.transparent = false;
	cubeMaterial.vertexColors = THREE.FaceColors;
	
	camera.position.x = 15;
    camera.position.y = 15;
    camera.position.z = 15;
    camera.lookAt(scene.position);
	
	container.append(renderer.domElement);
	
	render();
}

function buildRubiksCube() {
	var cubletFUR = new THREE.BoxGeometry(2.9, 2.9, 2.9);
	cubletFUR.faces.forEach(function (e) {
		frontupperright(e);
    });
	newCublet(cubletFUR, 1.5, 1.5, 1.5, "FUR");
	
	var cubletFLR = new THREE.BoxGeometry(2.9, 2.9, 2.9);
	cubletFLR.faces.forEach(function (e) {
		frontlowerright(e);
    });
	newCublet(cubletFLR, 1.5, -1.5, 1.5, "FLR");
	
	var cubletBUR = new THREE.BoxGeometry(2.9, 2.9, 2.9);
	cubletBUR.faces.forEach(function (e) {
		backupperright(e);
    });
	newCublet(cubletBUR, 1.5, 1.5, -1.5, "BUR");
	
	var cubletBLR = new THREE.BoxGeometry(2.9, 2.9, 2.9);
	cubletBLR.faces.forEach(function (e) {
		backlowerright(e);
    });	
	newCublet(cubletBLR, 1.5, -1.5, -1.5, "BLR");
    
	var cubletBUL = new THREE.BoxGeometry(2.9, 2.9, 2.9);
	cubletBUL.faces.forEach(function (e) {
		backupperleft(e);
    });
	newCublet(cubletBUL, -1.5, 1.5, -1.5, "BUL");
	
	var cubletBLL = new THREE.BoxGeometry(2.9, 2.9, 2.9);
	cubletBLL.faces.forEach(function (e) {
		backlowerleft(e);
    });	
	newCublet(cubletBLL, -1.5, -1.5, -1.5, "BLL");
	
	var cubletFUL = new THREE.BoxGeometry(2.9, 2.9, 2.9);
	cubletFUL.faces.forEach(function (e) {
		frontupperleft(e);
    });
	newCublet(cubletFUL, -1.5, 1.5, 1.5, "FUL");
	
	var cubletFLL = new THREE.BoxGeometry(2.9, 2.9, 2.9);
	cubletFLL.faces.forEach(function (e) {
		frontlowerleft(e);
    });
	newCublet(cubletFLL, -1.5, -1.5, 1.5, "FLL");
}

function newCublet(cubeGeometry,x,y,z,name) {
	
    var cubeMaterial = new THREE.MeshLambertMaterial();
	cubeMaterial.transparent = false;
	cubeMaterial.vertexColors = THREE.FaceColors;

	var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.name = name;
	cube.position.x = x;
	cube.position.y = y;
	cube.position.z = z;
	rubiksCube.add(cube);
}

function frontupperright(e) {
		
	if (e.a == 0 && e.b == 2 && e.c == 1)
		e.color = new THREE.Color(0xff0000);
	if (e.a == 2 && e.b == 3 && e.c == 1)
		e.color = new THREE.Color(0xff0000);
	if (e.a == 4 && e.b == 6 && e.c == 5)
		e.color = new THREE.Color(0x000000);
	if (e.a == 6 && e.b == 7 && e.c == 5)
		e.color = new THREE.Color(0x000000);
	if (e.a == 4 && e.b == 5 && e.c == 1)
		e.color = new THREE.Color(0xffffff);
	if (e.a == 5 && e.b == 0 && e.c == 1)
		e.color = new THREE.Color(0xffffff);
	if (e.a == 7 && e.b == 6 && e.c == 2)
		e.color = new THREE.Color(0x000000);
	if (e.a == 6 && e.b == 3 && e.c == 2)
		e.color = new THREE.Color(0x000000);
	if (e.a == 5 && e.b == 7 && e.c == 0)
		e.color = new THREE.Color(0x00ff00);
	if (e.a == 7 && e.b == 2 && e.c == 0)
		e.color = new THREE.Color(0x00ff00);
	if (e.a == 1 && e.b == 3 && e.c == 4)
		e.color = new THREE.Color(0x000000);
	if (e.a == 3 && e.b == 6 && e.c == 4)
		e.color = new THREE.Color(0x000000);
}

function frontupperleft(e) {
	
	if (e.a == 0 && e.b == 2 && e.c == 1)
		e.color = new THREE.Color(0x000000);
	if (e.a == 2 && e.b == 3 && e.c == 1)
		e.color = new THREE.Color(0x000000);
	if (e.a == 5 && e.b == 0 && e.c == 1)
		e.color = new THREE.Color(0xffffff);
	if (e.a == 4 && e.b == 5 && e.c == 1)
		e.color = new THREE.Color(0xffffff);
	if (e.a == 5 && e.b == 7 && e.c == 0)
		e.color = new THREE.Color(0x00ff00);
	if (e.a == 7 && e.b == 2 && e.c == 0)
		e.color = new THREE.Color(0x00ff00);
	if (e.a == 4 && e.b == 6 && e.c == 5)
		e.color = new THREE.Color(0xffa500);
	if (e.a == 6 && e.b == 7 && e.c == 5)
		e.color = new THREE.Color(0xffa500);
	if (e.a == 7 && e.b == 6 && e.c == 2)
		e.color = new THREE.Color(0x000000);
	if (e.a == 6 && e.b == 3 && e.c == 2)
		e.color = new THREE.Color(0x000000);
	if (e.a == 1 && e.b == 3 && e.c == 4)
		e.color = new THREE.Color(0x000000);
	if (e.a == 3 && e.b == 6 && e.c == 4)
		e.color = new THREE.Color(0x000000);
}

function frontlowerright(e) {
	
	if (e.a == 0 && e.b == 2 && e.c == 1)
		e.color = new THREE.Color(0xff0000);
	if (e.a == 2 && e.b == 3 && e.c == 1)
		e.color = new THREE.Color(0xff0000);
	if (e.a == 5 && e.b == 0 && e.c == 1)
		e.color = new THREE.Color(0x000000);
	if (e.a == 4 && e.b == 5 && e.c == 1)
		e.color = new THREE.Color(0x000000);
	if (e.a == 5 && e.b == 7 && e.c == 0)
		e.color = new THREE.Color(0x00ff00);
	if (e.a == 7 && e.b == 2 && e.c == 0)
		e.color = new THREE.Color(0x00ff00);
	if (e.a == 1 && e.b == 3 && e.c == 4)
		e.color = new THREE.Color(0x000000);
	if (e.a == 3 && e.b == 6 && e.c == 4)
		e.color = new THREE.Color(0x000000);
	if (e.a == 7 && e.b == 6 && e.c == 2)
		e.color = new THREE.Color(0xffff00);
	if (e.a == 6 && e.b == 3 && e.c == 2)
		e.color = new THREE.Color(0xffff00);
	if (e.a == 4 && e.b == 6 && e.c == 5)
		e.color = new THREE.Color(0x000000);
	if (e.a == 6 && e.b == 7 && e.c == 5)
		e.color = new THREE.Color(0x000000);
}

function frontlowerleft(e) {
	
	if (e.a == 0 && e.b == 2 && e.c == 1)
		e.color = new THREE.Color(0x000000);
	if (e.a == 2 && e.b == 3 && e.c == 1)
		e.color = new THREE.Color(0x000000);
	if (e.a == 5 && e.b == 0 && e.c == 1)
		e.color = new THREE.Color(0x000000);
	if (e.a == 4 && e.b == 5 && e.c == 1)
		e.color = new THREE.Color(0x000000);
	if (e.a == 5 && e.b == 7 && e.c == 0)
		e.color = new THREE.Color(0x00ff00);
	if (e.a == 7 && e.b == 2 && e.c == 0)
		e.color = new THREE.Color(0x00ff00);
	if (e.a == 4 && e.b == 6 && e.c == 5)
		e.color = new THREE.Color(0xffa500);
	if (e.a == 6 && e.b == 7 && e.c == 5)
		e.color = new THREE.Color(0xffa500);
	if (e.a == 7 && e.b == 6 && e.c == 2)
		e.color = new THREE.Color(0xffff00);
	if (e.a == 6 && e.b == 3 && e.c == 2)
		e.color = new THREE.Color(0xffff00);
	if (e.a == 1 && e.b == 3 && e.c == 4)
		e.color = new THREE.Color(0x000000);
	if (e.a == 3 && e.b == 6 && e.c == 4)
		e.color = new THREE.Color(0x000000);
}

function backupperright(e) {
	
	if (e.a == 0 && e.b == 2 && e.c == 1)
		e.color = new THREE.Color(0xff0000);
	if (e.a == 2 && e.b == 3 && e.c == 1)
		e.color = new THREE.Color(0xff0000);
	if (e.a == 5 && e.b == 0 && e.c == 1)
		e.color = new THREE.Color(0xffffff);
	if (e.a == 4 && e.b == 5 && e.c == 1)
		e.color = new THREE.Color(0xffffff);
	if (e.a == 5 && e.b == 7 && e.c == 0)
		e.color = new THREE.Color(0x000000);
	if (e.a == 7 && e.b == 2 && e.c == 0)
		e.color = new THREE.Color(0x000000);
	if (e.a == 4 && e.b == 6 && e.c == 5)
		e.color = new THREE.Color(0x000000);
	if (e.a == 6 && e.b == 7 && e.c == 5)
		e.color = new THREE.Color(0x000000);
	if (e.a == 7 && e.b == 6 && e.c == 2)
		e.color = new THREE.Color(0x000000);
	if (e.a == 6 && e.b == 3 && e.c == 2)
		e.color = new THREE.Color(0x000000);
	if (e.a == 1 && e.b == 3 && e.c == 4)
		e.color = new THREE.Color(0x0000ff);
	if (e.a == 3 && e.b == 6 && e.c == 4)
		e.color = new THREE.Color(0x0000ff);
}

function backupperleft(e) {
	
	if (e.a == 0 && e.b == 2 && e.c == 1)
		e.color = new THREE.Color(0x000000);
	if (e.a == 2 && e.b == 3 && e.c == 1)
		e.color = new THREE.Color(0x000000);
	if (e.a == 5 && e.b == 0 && e.c == 1)
		e.color = new THREE.Color(0xffffff);
	if (e.a == 4 && e.b == 5 && e.c == 1)
		e.color = new THREE.Color(0xffffff);
	if (e.a == 5 && e.b == 7 && e.c == 0)
		e.color = new THREE.Color(0x000000);
	if (e.a == 7 && e.b == 2 && e.c == 0)
		e.color = new THREE.Color(0x000000);
	if (e.a == 4 && e.b == 6 && e.c == 5)
		e.color = new THREE.Color(0xffa500);
	if (e.a == 6 && e.b == 7 && e.c == 5)
		e.color = new THREE.Color(0xffa500);
	if (e.a == 7 && e.b == 6 && e.c == 2)
		e.color = new THREE.Color(0x000000);
	if (e.a == 6 && e.b == 3 && e.c == 2)
		e.color = new THREE.Color(0x000000);
	if (e.a == 1 && e.b == 3 && e.c == 4)
		e.color = new THREE.Color(0x0000ff);
	if (e.a == 3 && e.b == 6 && e.c == 4)
		e.color = new THREE.Color(0x0000ff);
}

function backlowerright(e) {
	
	if (e.a == 0 && e.b == 2 && e.c == 1)
		e.color = new THREE.Color(0xff0000);
	if (e.a == 2 && e.b == 3 && e.c == 1)
		e.color = new THREE.Color(0xff0000);
	if (e.a == 5 && e.b == 0 && e.c == 1)
		e.color = new THREE.Color(0x000000);
	if (e.a == 4 && e.b == 5 && e.c == 1)
		e.color = new THREE.Color(0x000000);
	if (e.a == 5 && e.b == 7 && e.c == 0)
		e.color = new THREE.Color(0x000000);
	if (e.a == 7 && e.b == 2 && e.c == 0)
		e.color = new THREE.Color(0x000000);
	if (e.a == 4 && e.b == 6 && e.c == 5)
		e.color = new THREE.Color(0x000000);
	if (e.a == 6 && e.b == 7 && e.c == 5)
		e.color = new THREE.Color(0x000000);
	if (e.a == 7 && e.b == 6 && e.c == 2)
		e.color = new THREE.Color(0xffff00);
	if (e.a == 6 && e.b == 3 && e.c == 2)
		e.color = new THREE.Color(0xffff00);
	if (e.a == 1 && e.b == 3 && e.c == 4)
		e.color = new THREE.Color(0x0000ff);
	if (e.a == 3 && e.b == 6 && e.c == 4)
		e.color = new THREE.Color(0x0000ff);
}

function backlowerleft(e) {
	
	if (e.a == 0 && e.b == 2 && e.c == 1)
		e.color = new THREE.Color(0x000000);
	if (e.a == 2 && e.b == 3 && e.c == 1)
		e.color = new THREE.Color(0x000000);
	if (e.a == 5 && e.b == 0 && e.c == 1)
		e.color = new THREE.Color(0x000000);
	if (e.a == 4 && e.b == 5 && e.c == 1)
		e.color = new THREE.Color(0x000000);
	if (e.a == 5 && e.b == 7 && e.c == 0)
		e.color = new THREE.Color(0x000000);
	if (e.a == 7 && e.b == 2 && e.c == 0)
		e.color = new THREE.Color(0x000000);
	if (e.a == 4 && e.b == 6 && e.c == 5)
		e.color = new THREE.Color(0xffa500);
	if (e.a == 6 && e.b == 7 && e.c == 5)
		e.color = new THREE.Color(0xffa500);
	if (e.a == 7 && e.b == 6 && e.c == 2)
		e.color = new THREE.Color(0xffff00);
	if (e.a == 6 && e.b == 3 && e.c == 2)
		e.color = new THREE.Color(0xffff00);
	if (e.a == 1 && e.b == 3 && e.c == 4)
		e.color = new THREE.Color(0x0000ff);
	if (e.a == 3 && e.b == 6 && e.c == 4)
		e.color = new THREE.Color(0x0000ff);
}

// To Do: Rotations and turns need to be animated.

function rotateX() {

	var axisX = new THREE.Matrix4().makeRotationX(-(0.5 * Math.PI));
		for(var i = 0; i < rubiksCube.children.length; ++i){
			rubiksCube.children[i].applyMatrix(axisX);
		}
	
}

function rotateY() {
	var axisY = new THREE.Matrix4().makeRotationY(-(0.5 * Math.PI));
	for(var i = 0; i < rubiksCube.children.length; ++i){
		rubiksCube.children[i].applyMatrix(axisY);
	}
}

function rotateZ() {
	var axisZ = new THREE.Matrix4().makeRotationZ(-(0.5 * Math.PI));
	for(var i = 0; i < rubiksCube.children.length; ++i){
		rubiksCube.children[i].applyMatrix(axisZ);
	}	
}

function rotateXPrime() {

	var axisX = new THREE.Matrix4().makeRotationX(0.5 * Math.PI);
		for(var i = 0; i < rubiksCube.children.length; ++i){
			rubiksCube.children[i].applyMatrix(axisX);
	}
	
}

function rotateYPrime() {
	
	var axisY = new THREE.Matrix4().makeRotationY(0.5 * Math.PI);
		for(var i = 0; i < rubiksCube.children.length; ++i){
			rubiksCube.children[i].applyMatrix(axisY);
	}
}

function rotateZPrime() {

	var axisZ = new THREE.Matrix4().makeRotationZ(0.5 * Math.PI);
		for(var i = 0; i < rubiksCube.children.length; ++i){
			rubiksCube.children[i].applyMatrix(axisZ);
	}
	
}

function turnU() {
	var axisY = new THREE.Matrix4().makeRotationY(-(0.5 * Math.PI));
		for(var i = 0; i < rubiksCube.children.length; ++i){
		if(rubiksCube.children[i].position.y>0){
			rubiksCube.children[i].applyMatrix(axisY);
		}
	}
}

function turnD() {
	
	var axisY = new THREE.Matrix4().makeRotationY(0.5 * Math.PI);
		for(var i = 0; i < rubiksCube.children.length; ++i){
		if(rubiksCube.children[i].position.y<0){
			rubiksCube.children[i].applyMatrix(axisY);
		}
	}
}

function turnL() {
	
	var axisX = new THREE.Matrix4().makeRotationX(0.5 * Math.PI);
		for(var i = 0; i < rubiksCube.children.length; ++i){
		if(rubiksCube.children[i].position.x<0){
			rubiksCube.children[i].applyMatrix(axisX);
		}
	}
}

function turnR() {
	
	var axisX = new THREE.Matrix4().makeRotationX(-(0.5 * Math.PI));
		for(var i = 0; i < rubiksCube.children.length; ++i){
		if(rubiksCube.children[i].position.x>0){
			rubiksCube.children[i].applyMatrix(axisX);
		}
	}
}

function turnF() {
	
	var axisZ = new THREE.Matrix4().makeRotationZ(-(0.5 * Math.PI));
		for(var i = 0; i < rubiksCube.children.length; ++i){
		if(rubiksCube.children[i].position.z>0){
			rubiksCube.children[i].applyMatrix(axisZ);
		}
	}
}

function turnB() {
	
	var axisZ = new THREE.Matrix4().makeRotationZ(0.5 * Math.PI);
		for(var i = 0; i < rubiksCube.children.length; ++i){
		if(rubiksCube.children[i].position.z<0){
			rubiksCube.children[i].applyMatrix(axisZ);
		}
	}
}

function turnUPrime() {
	var axisY = new THREE.Matrix4().makeRotationY(0.5 * Math.PI);
		for(var i = 0; i < rubiksCube.children.length; ++i){
		if(rubiksCube.children[i].position.y>0){
			rubiksCube.children[i].applyMatrix(axisY);
		}
	}
}

function turnDPrime() {
	
	var axisY = new THREE.Matrix4().makeRotationY(-(0.5 * Math.PI));
		for(var i = 0; i < rubiksCube.children.length; ++i){
		if(rubiksCube.children[i].position.y<0){
			rubiksCube.children[i].applyMatrix(axisY);
		}
	}
}

function turnLPrime() {
	
	var axisX = new THREE.Matrix4().makeRotationX(-(0.5 * Math.PI));
		for(var i = 0; i < rubiksCube.children.length; ++i){
		if(rubiksCube.children[i].position.x<0){
			rubiksCube.children[i].applyMatrix(axisX);
		}
	}
}

function turnRPrime() {
	
	var axisX = new THREE.Matrix4().makeRotationX(0.5 * Math.PI);
		for(var i = 0; i < rubiksCube.children.length; ++i){
		if(rubiksCube.children[i].position.x>0){
			rubiksCube.children[i].applyMatrix(axisX);
		}
	}
}

function turnFPrime() {
	
	var axisZ = new THREE.Matrix4().makeRotationZ(0.5 * Math.PI);
		for(var i = 0; i < rubiksCube.children.length; ++i){
		if(rubiksCube.children[i].position.z>0){
			rubiksCube.children[i].applyMatrix(axisZ);
		}
	}
}

function turnBPrime() {
	
	var axisZ = new THREE.Matrix4().makeRotationZ(-(0.5 * Math.PI));
		for(var i = 0; i < rubiksCube.children.length; ++i){
		if(rubiksCube.children[i].position.z<0){
			rubiksCube.children[i].applyMatrix(axisZ);
		}
	}
}

function isOLLAllTrue() {
	var isTrueFLR = false;
	var isTrueBLR = false;
	var isTrueBLL = false;
	rubiksCube.children.forEach(function(cublet) {
		if(cublet.name == "FLR") {
			if(cublet.position.x == -1.5 && cublet.position.y == 1.5 && cublet.position.z == 1.5) {
				isTrueFLR = true;
			}
		}
		if(cublet.name == "BLR") {
			if(cublet.position.x == -1.5 && cublet.position.y == 1.5 && cublet.position.z == -1.5) {
				isTrueBLR = true;
			}
		}
		if(cublet.name == "BLL") {
			if(cublet.position.x == 1.5 && cublet.position.y == 1.5 && cublet.position.z == -1.5) {
				isTrueBLL = true;
			}
		}
	});
	var isTrue = false;
	if(isTrueFLR && isTrueBLR && isTrueBLL) {
		isTrue = true;
	}
	
	return isTrue;
}

function isOLLAllFalse() {
	var isTrueFLR = false;
	var isTrueBLR = false;
	var isTrueBLL = false;
	rubiksCube.children.forEach(function(cublet) {
		if(cublet.name == "FLR") {
			if(cublet.position.x == -1.5 && cublet.position.y == 1.5 && cublet.position.z == 1.5) {
				isTrueFLR = true;
			}
		}
		if(cublet.name == "BLR") {
			if(cublet.position.x == -1.5 && cublet.position.y == 1.5 && cublet.position.z == -1.5) {
				isTrueBLR = true;
			}
		}
		if(cublet.name == "BLL") {
			if(cublet.position.x == 1.5 && cublet.position.y == 1.5 && cublet.position.z == -1.5) {
				isTrueBLL = true;
			}
		}
	});
	var isTrue = false;
	if(!isTrueFLR && !isTrueBLR && !isTrueBLL) {
		isTrue = true;
	}
	
	return isTrue;
}

function moveOLLAlg() {
	turnR();
	turnU();
	turnRPrime();
	turnUPrime();
	var output = "R, U, R', U'";
	moveLog.value += output + "\n";
}

function movePLL() {
		rubiksCube.children.forEach(function(cublet) {
		if(cublet.position.x == 1.5 && cublet.position.y == -1.5 && cublet.position.z == 1.5) {
			cublet.geometry.applyMatrix(cublet.matrix);
			var point;
			if(cublet.name == "FLR") {
				point = cublet.geometry.vertices[6];
			}
			if(cublet.name == "FLL") {
				point = cublet.geometry.vertices[3];
			}
			if(cublet.name == "BLR") {
				point = cublet.geometry.vertices[7];
			}
			if(cublet.name == "BLL") {
				point = cublet.geometry.vertices[2];
			}
			var gx = point.x.toFixed(2);
			var gy = point.y.toFixed(2);
			var gz = point.z.toFixed(2);
			if(gx == 2.95 && gy == -0.05 && gz == 0.05) {
				moveOLLAlg();
				moveOLLAlg();
			}
			if(gx == 0.05 && gy == -0.05 && gz == 2.95) {
				moveOLLAlg();
				moveOLLAlg();
				moveOLLAlg();
				moveOLLAlg();
			}
		}
	});
}

function solveOLL() {
	rotateX();
	rotateX();
	moveLog.value += "X2\n";
	
	movePLL();
	turnDPrime();
	moveLog.value += "D'\n";
	movePLL();
	turnDPrime();
	moveLog.value += "D'\n";
	movePLL();
	turnDPrime();
	moveLog.value += "D'\n";
	movePLL();
	turnUPrime();
	moveLog.value += "U'\n";
}

function moveOLL() {
	var output = "";
	if(isOLLAllTrue()) return;
	if(!isOLLAllFalse()) {
		turnF();
		turnR();
		turnU();
		turnRPrime();
		turnUPrime();
		turnFPrime();
		output += "F, R, U, R', U', F' ";
		moveFLL();
	}
	while(isOLLAllFalse()) {
		turnU();
		turnR()
		turnUPrime();
		turnLPrime();
		turnU();
		turnRPrime();
		turnUPrime();
		turnL();
		output += "U, R, U', L', U, R', U', L ";
	}
	moveLog.value += output + "\n";
}

function moveFLL() {
	var mesh;
	var output = "";
	rubiksCube.children.forEach(function(cublet) {
		if(cublet.name == "FLL") {
			mesh = cublet;
		}
	});
	
	var x, y, z;
	x = mesh.position.x;
	y = mesh.position.y;
	z = mesh.position.z;
	
	if(x == -1.5 && y == 1.5 && z == 1.5) {
		turnUPrime();
		output += "U'";
	}
	else if (x == -1.5 && y == 1.5 && z == -1.5) {
		turnU();
		turnU();
		output += "U2";
	}
	else if (x == 1.5 && y == 1.5 && z == -1.5) {
		turnU();
		output += "U";
	}
	moveLog.value += output + "\n";
}


function moveBUR() {
	var mesh;
	var output = "";
	rubiksCube.children.forEach(function(cublet) {
		var name = cublet.name;
		if(name == "BUR") {
			mesh = cublet;
		}
	});
	var x, y, z;
	x = mesh.position.x;
	y = mesh.position.y;
	z = mesh.position.z;
	
	mesh.geometry.applyMatrix(mesh.matrix);
	
	var point = mesh.geometry.vertices[0];
	var gx = point.x.toFixed(2);
	var gy = point.y.toFixed(2);
	var gz = point.z.toFixed(2);
	
	if(x>0 && y>0 && z<0) {
	
		if(gx == 2.95 && gy == 2.95 && gz == -0.05) {
			turnUPrime();
			turnL();
			turnUPrime();
			turnLPrime();
			turnU();
			turnU();
			turnL();
			turnU();
			turnLPrime();
			output += "U', L, U', L', U2, L, U, L'";
		}
		
		if(gx == 2.95 && gy == 0.05 && gz == -2.95) {
			turnL();
			turnUPrime();
			turnLPrime();
			output += "L, U', L'";
		}
		
		if(gx == 0.05 && gy == 2.95 && gz == -2.95) {
			turnUPrime();
			turnL();
			turnU();
			turnLPrime();
			output += "U', L, U, L'";
		}
	}
	
	if(x>0 && y>0 && z>0) {
		
		if(gx == 0.05 && gy == 2.95 && gz == 2.95) {
			turnUPrime();
			turnUPrime();
			turnL();
			turnUPrime();
			turnLPrime();
			turnU();
			turnU();
			turnL();
			turnU();
			turnLPrime();
			output += "U2, L, U', L', U2, L, U, L'";
		}
		
		if(gx == 2.95 && gy == 0.05 && gz == 2.95) {
			turnUPrime();
			turnL();
			turnUPrime();
			turnLPrime();
			output += "U', L, U', L'";
		}
		
		if(gx == 2.95 && gy == 2.95 && gz == 0.05) {
			turnU();
			turnU();
			turnL();
			turnU();
			turnLPrime();
			output += "U2, L, U, L'";
		}
		
	}
	
	if(x<0 && y>0 && z>0) {
		
		if(gx == -2.95 && gy == 2.95 && gz == 0.05) {
			turnU();
			turnL();
			turnUPrime();
			turnLPrime();
			turnU();
			turnU();
			turnL();
			turnU();
			turnLPrime();
			output += "U, L, U', L', U2, L, U, L'";
		}
		
		if(gx == -2.95 && gy == 0.05 && gz == 2.95) {
			turnU();
			turnU();
			turnL();
			turnUPrime();
			turnLPrime();
			output += "U2, L, U', L'";
		}
		
		if(gx == -0.05 && gy == 2.95 && gz == 2.95) {
			turnU();
			turnL();
			turnU();
			turnLPrime();
			output += "U, L, U, L'";
		}
		
	}
	
	if(x<0 && y>0 && z<0) {
		
		if(gx == -0.05 && gy == 2.95 && gz == -2.95) {
			turnL();
			turnUPrime();
			turnLPrime();
			turnU();
			turnU();
			turnL();
			turnU();
			turnLPrime();
			output += "L, U', L', U2, L, U, L'";
		}
		
		if(gx == -2.95 && gy == 2.95 && gz == -0.05) {
			turnL();
			turnU();
			turnLPrime();
			output += "L, U, L'";
		}
		
		if(gx == -2.95 && gy == 0.05 && gz == -2.95) {
			turnU();
			turnL();
			turnUPrime();
			turnLPrime();
			output += "U, L, U', L'";
		}
		
	}
	
	if(x<0 && y<0 && z<0) {
		
		if(gx == -2.95 && gy == -0.05 && gz == -2.95) {
			turnL();
			turnU();
			turnLPrime();
			turnUPrime();
			turnL();
			turnU();
			turnLPrime();
			output += "L, U, L', U', L, U, L'";
		}
		
		if(gx == -0.05 && gy == -2.95 && gz == -2.95) {
			turnL();
			turnUPrime();
			turnLPrime();
			turnU();
			turnL();
			turnUPrime();
			turnLPrime();
			output += "L, U', L', U, L, U', L'";
		}
	}
	moveLog.value += output + "\n";
}

function moveBUL() {
	var mesh;
	var output = "";
	rubiksCube.children.forEach(function(cublet) {
		var name = cublet.name;
		if(name == "BUL") {
			mesh = cublet;
		}
	});
	var x, y, z;
	x = mesh.position.x;
	y = mesh.position.y;
	z = mesh.position.z;
	
	mesh.geometry.applyMatrix(mesh.matrix);
	
	var point = mesh.geometry.vertices[0];
	var gx = point.x.toFixed(2);
	var gy = point.y.toFixed(2);
	var gz = point.z.toFixed(2);
	
	if(x<0 && y>0 && z<0) {
		if(gx == -0.05 && gy == 2.95 && gz == -0.05) {
			turnB();
			turnB();
			output += "B2";
		}
		
		if(gx == -2.95 && gy == 0.05 && gz == -0.05) {
			turnU();
			turnB();
			turnU();
			turnBPrime();
			output += "U, B, U, B'";
		}
		
		if(gx == -0.05 && gy == 0.05 && gz == -2.95) {
			turnU();
			turnBPrime();
			output += "U, B'";
		}
	}
	if(x<0 && y>0 && z>0) {
		if(gx == -0.05 && gy == 2.95 && gz == 0.05) {
			turnU();
			turnB();
			turnB();
			output += "U, B2";
		}
		
		if(gx == -0.05 && gy == 0.05 && gz == 2.95) {
			turnU();
			turnRPrime();
			turnU();
			turnR();
			output += "U, R', U, R";
		}
		
		if(gx == -2.95 && gy == 0.05 && gz == 0.05) {
			turnU();
			turnU();
			turnBPrime();
			output += "U2, B'";
		}
	}
	if(x>0 && y>0 && z>0) {
		if(gx == 0.05 && gy == 2.95 && gz == 0.05) {
			turnU();
			turnU();
			turnB();
			turnB();
			output += "U2, B2";
		}
		
		if(gx == 0.05 && gy == 0.05 && gz == 2.95) {
			turnUPrime();
			turnBPrime();
			output += "U', B'";
		}
		
		if(gx == 2.95 && gy == 0.05 && gz == 0.05) {
			turnUPrime();
			turnB();
			turnU();
			turnBPrime();
			output += "U', B, U, B'";
		}
	}
	if(x>0 && y>0 && z<0) {
		if(gx == 0.05 && gy == 2.95 && gz == -0.05) {
			turnUPrime();
			turnB();
			turnB();
			output += "U', B2";
		}
		
		if(gx == 2.95 && gy == 0.05 && gz == -0.05) {
			turnBPrime();
			output += "B'";
		}
		
		if(gx == 0.05 && gy == 0.05 && gz == -2.95) {
			turnB();
			turnU();
			turnBPrime();
			output += "B, U, B'";
		}
	}
	if(x<0 && y<0 && z<0) {
		if(gx == -0.05 && gy == -2.95 && gz == -0.05) {
			turnB();
			turnB();
			turnUPrime();
			turnB();
			turnB();
			output += "B2, U', B2";
		}
		
		if(gx == -0.05 && gy == -0.05 && gz == -2.95) {
			turnBPrime();
			turnU();
			turnBPrime();
			output += "B', U, B'";
		}
		
		if(gx == -2.95 && gy == -0.05 && gz == -0.05) {
			turnB();
			output += "B";
		}
	}
	if(x>0 && y<0 && z<0) {
		if(gx == 0.05 && gy == -0.05 && gz == -2.95) {
			turnB();
			turnB();
			turnU();
			turnBPrime();
			output += "B2, U, B'";
		}
		
		if(gx == 2.95 && gy == -0.05 && gz == -0.05) {
			turnB();
			turnUPrime();
			turnB();
			turnB();
			output += "B, U', B2";
		}
	}
	moveLog.value += output + "\n";
}

function moveFUL() {
	var mesh;
	var output = "";
	rubiksCube.children.forEach(function(cublet) {
		var name = cublet.name;
		if(name == "FUL") {
			mesh = cublet;
		}
	});
	var x, y, z;
	x = mesh.position.x;
	y = mesh.position.y;
	z = mesh.position.z;
	mesh.geometry.applyMatrix(mesh.matrix);
	
	var point = mesh.geometry.vertices[4];
	var gx = point.x.toFixed(2);
	var gy = point.y.toFixed(2);
	var gz = point.z.toFixed(2);
	
	if(x>0 && y>0 && z>0) {
		if(gx == 0.05 && gy == 2.95 && gz ==2.95) {
			turnR();
			turnU();
			turnR();
			turnU();
			turnRPrime();
			output += "R, U, R, U, R'";
		}
		if(gx == 2.95 && gy == 2.95 && gz == 0.05) {
			turnR();
			turnU();
			turnRPrime();
			output += "R, U, R'";
		}
		if(gx == 2.95 && gy == 0.05 && gz == 2.95) {
			turnRPrime();
			output += "R'";
		}
	}
	
	if(x<0 && y>0 && z>0) {
		if(gx == -2.95 && gy == 2.95 && gz == 0.05) {
			turnUPrime();
			turnR();
			turnU();
			turnR();
			turnU();
			turnRPrime();
			output += "U', R, U, R, U, R'";
		}
		if(gx == -0.05 && gy == 2.95 && gz == 2.95) {
			turnUPrime();
			turnR();
			turnU();
			turnRPrime();
			output += "U', R, U, R'";
		}
		if(gx == -2.95 && gy == 0.05 && gz == 2.95) {
			turnR();
			turnUPrime();
			turnRPrime();
			output += "R, U', R'";
		}
	}
	
	if(x<0 && y>0 && z<0) {
		if(gx == -0.05 && gy == 2.95 && gz == -2.95) {
			turnU();
			turnU();
			turnR();
			turnU();
			turnR();
			turnU();
			turnRPrime();
			output += "U2, R, U, R, U, R'";
		}
		if(gx == -2.95 && gy == 0.05 && gz == -2.95) {
			turnUPrime();
			turnR();
			turnUPrime();
			turnRPrime();
			output += "U', R, U', R'";
		}
		if(gx == -2.95 && gy == 2.95 && gz == -0.05) {
			turnU();
			turnU();
			turnR();
			turnU();
			turnRPrime();
			output += "U2, R, U, R'";
		}
	}
	
	if(x>0 && y>0 && z<0) {
		if(gx == 2.95 && gy == 2.95 && gz == -0.05) {
			turnR();
			turnR();
			output += "R2";
		}
		if(gx == 2.95 && gy == 0.05 && gz == -2.95) {
			turnU();
			turnU();
			turnR();
			turnUPrime();
			turnRPrime();
			output += "U2, R, U', R'";
		}
		if(gx == 0.05 && gy == 2.95 && gz == -2.95) {
			turnU();
			turnR();
			turnU();
			turnRPrime();
			output += "U, R, U, R'";
		}
	}
	
	if(x<0 && y<0 && z<0) {
		if(gx == -2.95 && gy == -2.95 && gz == -0.05) {
			turnB();
			turnB();
			turnR();
			turnR();
			output += "B2, R2";
		}
		if(gx == -0.05 && gy == -2.95 && gz == -2.95) {
			turnBPrime();
			turnU();
			turnU();
			turnRPrime();
			output += "B', U2, R'";
		}
		if(gx == -2.95 && gy == -0.05 && gz == -2.95) {
			turnBPrime();
			turnU();
			turnR();
			turnR();
			output += "B', U, R2";
		}
	}
	
	if(x>0 && y<0 && z<0) {
		if(gx == 0.05 && gy == -2.95 && gz == -2.95) {
			turnB();
			turnU();
			turnRPrime();
			output += "B, U, R'";
		}
		if(gx == 2.95 && gy == -0.05 && gz == -2.95) {
			turnR();
			output += "R";
		}
		if(gx == 2.95 && gy == -2.95 && gz == -0.05) {
			turnRPrime();
			turnU();
			turnRPrime();
			output += "R', U, R'";
		}
	}
	
	if(x>0 && y<0 && z>0) {
		if(gx == 0.05 && gy == -2.95 && gz == 2.95) {
			turnR();
			turnUPrime();
			turnRPrime();
			turnU();
			turnR();
			turnUPrime();
			turnRPrime();
			output += "R, U', R', U, R, U', R'";
		}
		if(gx == 2.95 && gy == -0.05 && gz == 2.95) {
			turnR();
			turnR();
			turnU();
			turnRPrime();
			output += "R2, U, R'";
		}
	}
	moveLog.value += output + "\n";
}

function moveFUR() {
	var mesh;
	var output = "";
	rubiksCube.children.forEach(function(cublet) {
		var name = cublet.name;
		if(name == "FUR") {
			mesh = cublet;
		}
	});
	var x, y, z;
	x = mesh.position.x;
	y = mesh.position.y;
	z = mesh.position.z;
	mesh.geometry.applyMatrix(mesh.matrix);
	
	var point = mesh.geometry.vertices[4];
	var gx = point.x.toFixed(2);
	var gy = point.y.toFixed(2);
	var gz = point.z.toFixed(2);
	
	
	if(x>0 && y>0 && z>0) {
		
		if(gx == 0.05 && gy == 2.95 && gz ==0.05) {
			turnF();
			turnF();
			output += "F2";
		}
		if(gx == 2.95 && gy == 0.05 && gz == 0.05) {
			turnF();
			turnDPrime();
			output += "F, D'";
		}
		if(gx == 0.05 && gy == 0.05 && gz == 2.95) {
			turnU();
			turnFPrime();
			output += "U, F'";
		}
	}
	
	if(x<0 && y>0 && z>0) {
		
		if(gx == -0.05 && gy == 2.95 && gz == 0.05) {
			turnUPrime();
			turnF();
			turnF();
			output += "U', F2";
		}
		if(gx == -2.95 && gy == 0.05 && gz == 0.05) {
			turnFPrime();
			output += "F'";
		}
		if(gx == -0.05 && gy == 0.05 && gz == 2.95) {
			turnL();
			output += "L";
		}
	}
	
	if(x<0 && y>0 && z<0) {
		
		if(gx == -0.05 && gy == 2.95 && gz == -0.05) {
			turnL();
			turnL();
			output += "L2";
		}
		if(gx == -2.95 && gy == 0.05 && gz == -0.05) {
			turnUPrime();
			turnL();
			output += "U', L";
		}
		if(gx == -0.05 && gy == 0.05 && gz == -2.95) {
			turnUPrime();
			turnFPrime();
			output += "U, F";
		}
	}
	
	if(x>0 && y>0 && z<0) {
		
		if(gx == 0.05 && gy == 2.95 && gz == -0.05) {
			turnR();
			turnR();
			turnDPrime();
			output += "R2, D'";
		}
		if(gx == 2.95 && gy == 0.05 && gz == -0.05) {
			turnR();
			turnR();
			turnF();
			output += "R2, F";
		}
		if(gx == 0.05 && gy == 0.05 && gz == -2.95) {
			turnRPrime();
			turnF();
			turnF();
			output += "R', F2";
		}
	}
	
	if(x>0 && y<0 && z>0) {
		
		if(gx == 0.05 && gy == -2.95 && gz == 0.05) {
			turnDPrime();
			output += "D'";
		}
		if(gx == 2.95 && gy == -0.05 && gz == 0.05) {
			turnF();
			output += "F";
		}
		if(gx == 0.05 && gy == -0.05 && gz == 2.95) {
			turnR();
			turnF();
			turnF();
			output += "R, F2";
		}
	}
	
	if(x<0 && y<0 && z<0) {
		
		if(gx == -0.05 && gy == -2.95 && gz == -0.05) {
			turnD();
			output += "D";
		}
		if(gx == -2.95 && gy == -0.05 && gz == -0.05) {
			turnD();
			turnD();
			turnF();
			output += "D2, F";
		}
		if(gx == -0.05 && gy == -0.05 && gz == -2.95) {
			turnLPrime();
			output += "L'";
		}
	}
	
	if(x>0 && y<0 && z<0) {
		
		if(gx == 0.05 && gy == -2.95 && gz == -0.05) {
			turnDPrime();
			turnDPrime();
			output += "D2";
		}
		if(gx == 2.95 && gy == -0.05 && gz == -0.05) {
			turnB();
			turnU();
			turnF();
			turnF();
			output += "B, U, F2";
		}
		if(gx == 0.05 && gy == -0.05 && gz == -2.95) {
			turnDPrime();
			turnF();
			output += "D', F";
		}
	}
	
	if(x<0 && y<0 && z>0) {
		
		if(gx == -2.95 && gy == -0.05 && gz == 0.05) {
			turnLPrime();
			turnFPrime();
			output += "L, F";
		}
		if(gx == -0.05 && gy == -0.05 && gz == 2.95) {
			turnD();
			turnF();
			output += "D, F";
		}
	}
	moveLog.value += output + "\n";
}

function solve() {
	moveLog.value += "Solve Steps\n";
	moveLog.value += "Step 1: Solve the white layer\n";
	moveLog.value += "White Green Red Corner\n";
	moveFUR();
	moveLog.value += "White Green Orange Corner\n";
	moveFUL();
	moveLog.value += "White Orange Blue Corner\n";
	moveBUL();
	moveLog.value += "White Blue Red Corner\n";
	moveBUR();
	
	moveLog.value += "Step 2: Orient the four upper corners\n";
	moveLog.value += "Move Yellow Green Orange Corner\n";
	moveFLL();
	moveLog.value += "Orient the other upper pieces\n";
	moveOLL();
	
	moveLog.value += "Step 3: Solve the last layer\n";
	moveLog.value += "Last four yellow corners\n";
	solveOLL();
	document.getElementById("solve").disabled = true;
}

function scramble() {
	var output = "Scramble\n";
	for(var i = 0; i <= 8; i++) {
		var randomMove = Math.floor(Math.random() * 18 + 1);
		switch(randomMove) {
			case 1:
				turnU();
				output += "U ";
				break;
			case 2 :
				turnUPrime();
				output += "U' ";
				break;
			case 3 :
				turnD();
				output += "D ";
				break;
			case 4 :
				turnDPrime();
				output += "D' ";
				break;
			case 5 :
				turnR();
				output += "R ";
				break;
			case 6 :
				turnRPrime();
				output += "R' ";
				break;
			case 7 :
				turnL();
				output += "L ";
				break;
			case 8 :
				turnLPrime();
				output += "L' ";
				break;
			case 9 :
				turnF();
				output += "F ";
				break;
			case 10 :
				turnFPrime();
				output += "F' ";
				break;
			case 11 :
				turnB();
				output += "B ";
				break;
			case 12 :
				turnBPrime();
				output += "B' ";
				break;
			case 13 :
				turnU();
				turnU();
				output += "U2 ";
				break;
			case 14 :
				turnD();
				turnD();
				output += "D2 ";
				break;
			case 15 :
				turnR();
				turnR();
				output += "R2 ";
				break;
			case 16 :
				turnL();
				turnL();
				output += "L2 ";
				break;
			case 17 :
				turnF();
				turnF();
				output += "F2 ";
				break;
			case 18 :
				turnB();
				turnB();
				output += "B2 ";
				break;
		}
	}
	moveLog.value = output + "\n\n";
}

function reset() {
	document.getElementById("solve").disabled = false;
	
	var element = document.getElementById("scene");
	element.innerHTML = "";
	cube(element);
}

function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}