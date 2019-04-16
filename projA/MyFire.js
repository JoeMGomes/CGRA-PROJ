/**
* MyHouse
* @constructor
*/

class MyFire extends CGFobject {
	constructor(scene) {
		super(scene);
		//this.degreeToRad = Math.PI / 180;
		this.initBuffers(scene);
		this.initTextures(scene);
	}
	initBuffers(scene) {
		scene.unitCube = new MyUnitCubeQuad(scene);
	}
	initTextures(scene) {
		this.columnTexture = new CGFappearance(scene);
		this.columnTexture.setAmbient(0.1, 0.1, 0.1, 1);
		this.columnTexture.setDiffuse(0.9, 0.9, 0.9, 1);
		this.columnTexture.setSpecular(0.1, 0.1, 0.1, 1);
		this.columnTexture.setShininess(10.0);
		this.columnTexture.setTexture(new CGFtexture(scene, 'images/bark6.jpg'));
	}
	display() {
		//Paus do chao
		this.scene.pushMatrix();
		this.scene.rotate(Math.PI/8,0,1,0);

		this.columnTexture.apply();
		this.scene.pushMatrix();
		this.scene.translate(0,0.03,0);
		this.scene.scale(.6, .06, .06);
		this.scene.unitCube.display();
		this.scene.popMatrix();
		
		this.scene.pushMatrix();
		this.scene.rotate(Math.PI /2,0,1,0);
		this.scene.translate(0,0.03,0);
		this.scene.scale(.6, .06, .06);
		this.scene.unitCube.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(Math.PI /4 ,0,1,0);
		this.scene.translate(0,0.03,0);
		this.scene.scale(.6, .06, .06);
		this.scene.unitCube.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(-Math.PI /4,0,1,0);
		this.scene.translate(0,0.03,0);
		this.scene.scale(.6, .06, .06);
		this.scene.unitCube.display();
		this.scene.popMatrix();

		this.scene.popMatrix();

		//paus diagonal
		
		this.scene.pushMatrix();
		this.scene.translate(.15,0,0);
		this.scene.rotate(-Math.PI /3,0,0,1);
		this.scene.translate(0,0.03,0);
		this.scene.scale(.6, .06, .06);
		this.scene.unitCube.display();
		this.scene.popMatrix();
		
		this.scene.pushMatrix();
		this.scene.rotate(Math.PI /2,0,1,0);
		this.scene.translate(.15,0,0);
		this.scene.rotate(-Math.PI /3,0,0,1);
		this.scene.translate(0,0.03,0);
		this.scene.scale(.6, .06, .06);
		this.scene.unitCube.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(Math.PI /4 ,0,1,0);
		this.scene.translate(.15,0,0);
		this.scene.rotate(-Math.PI /3,0,0,1);
		this.scene.translate(0,0.03,0);
		this.scene.scale(.6, .06, .06);
		this.scene.unitCube.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(-Math.PI /4,0,1,0);
		this.scene.translate(.15,0,0);
		this.scene.rotate(-Math.PI /3,0,0,1);
		this.scene.translate(0,0.03,0);
		this.scene.scale(.6, .06, .06);
		this.scene.unitCube.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(-Math.PI /2,0,1,0);
		this.scene.translate(.15,0,0);
		this.scene.rotate(-Math.PI /3,0,0,1);
		this.scene.translate(0,0.03,0);
		this.scene.scale(.6, .06, .06);
		this.scene.unitCube.display();
		this.scene.popMatrix();
		
		this.scene.pushMatrix();
		this.scene.rotate(3*Math.PI /4,0,1,0);
		this.scene.translate(.15,0,0);
		this.scene.rotate(-Math.PI /3,0,0,1);
		this.scene.translate(0,0.03,0);
		this.scene.scale(.6, .06, .06);
		this.scene.unitCube.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(-3*Math.PI /4 ,0,1,0);
		this.scene.translate(.15,0,0);
		this.scene.rotate(-Math.PI /3,0,0,1);
		this.scene.translate(0,0.03,0);
		this.scene.scale(.6, .06, .06);
		this.scene.unitCube.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(Math.PI,0,1,0);
		this.scene.translate(.15,0,0);
		this.scene.rotate(-Math.PI /3,0,0,1);
		this.scene.translate(0,0.03,0);
		this.scene.scale(.6, .06, .06);
		this.scene.unitCube.display();
		this.scene.popMatrix();

		
	}
}