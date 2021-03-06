/**
* MyBird
* @constructor
* @param scene - Reference to MyScene object
*/

class MyBird extends CGFobject {
    constructor(scene,orientation,x,y,z,speed) {
        super(scene);
        this.initBuffers(scene);
        this.orientation = orientation;
        this.x = x;
        this.y = y;
        this.z = z;
        this.speed = speed;
        this.wingAngle = 0;
        this.catching = false;
        this.flyUp = false;
        this.flyDown = true;
        this.caught = false;
        this.timeMarker = -1;
    }
    initBuffers(scene) {
        scene.cylinder = new MyCylinder(scene,5);
        scene.plane = new MyQuad (scene);
        scene.cone = new MyCone (scene, 5,0.2);
        scene.plane = new MyQuad (scene); //asa
        scene.cone = new MyCone (scene, 5,0.2); //lados do corpo e cabeça
        scene.beak = new MyCone (scene, 5, 0.5); //bico
        scene.eye = new MyUnitCubeQuad (scene); //eyes
        scene.triangle = new MyTriangle (scene); //asas e cauda
        this.birdStick = new MyCylinder(scene,5);

        this.branchMaterial = new CGFappearance(scene);
        this.branchMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.branchMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.branchMaterial.setSpecular(1, 1, 1, 1);
        this.branchMaterial.setShininess(15.0);
        this.branchMaterial.setTexture(new CGFtexture(scene, 'images/column.jpg'));

        this.featherMaterial = new CGFappearance(scene);
        this.featherMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.featherMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.featherMaterial.setSpecular(1, 1, 1, 1);
        this.featherMaterial.setShininess(15.0);
        this.featherMaterial.setTexture(new CGFtexture(scene, 'images/feather.jpg'));

        this.beakMaterial = new CGFappearance(scene);
        this.beakMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.beakMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.beakMaterial.setSpecular(1, 1, 1, 1);
        this.beakMaterial.setShininess(15.0);
        this.beakMaterial.setTexture(new CGFtexture(scene, 'images/beak.png'));

        this.eye = new CGFappearance(scene);
        this.eye.setAmbient(0.1, 0.1, 0.1, 1);
        this.eye.setDiffuse(0.2, 0.2, 0.2, 1);
        this.eye.setSpecular(0.2, 0.2, 0.2, 1);
        this.eye.setShininess(15.0);
    }

    display() {
        this.scene.pushMatrix();//MOVIMENTO

    
        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.orientation*this.scene.degreeToRad,0,1,0);
        this.scene.scale(.5*this.scene.scaleFactor,.5*this.scene.scaleFactor,.5*this.scene.scaleFactor);
        this.scene.translate(-this.x, -this.y, -this.z);

        this.scene.translate(this.x,this.y, this.z);;

        //para começar com orientação 0º
        this.scene.rotate(90*this.scene.degreeToRad, 0,1,0);
       
       this.featherMaterial.apply();
        //corpo
        this.scene.pushMatrix();
        this.scene.translate (-0.5,0,0);
        this.scene.rotate(-90*this.scene.degreeToRad, 0,0,1);
        this.scene.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate (0.5,0,0);
        this.scene.rotate(-90*this.scene.degreeToRad, 0,0,1);
        this.scene.cone.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate (-0.5,0,0);
        this.scene.rotate(72.5/2.0*this.scene.degreeToRad, 1,0,0);
        this.scene.rotate(90*this.scene.degreeToRad, 0,0,1);
        this.scene.cone.display();
        this.scene.popMatrix();
        ///////

        //cabeca
        this.scene.pushMatrix();
        this.scene.translate(-0.35,0.8,0.8);
        this.scene.scale(0.69,0.7,0.7);
        this.scene.rotate(-90*this.scene.degreeToRad, 0,0,1);
        this.scene.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate (0.34,0.8,0.8);
        this.scene.scale(0.7,0.7,0.7);
        this.scene.rotate(-90*this.scene.degreeToRad, 0,0,1);
        this.scene.cone.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.35,0.8,0.8);
        this.scene.scale(0.7,0.7,0.7);
        this.scene.rotate(72.5/2.0*this.scene.degreeToRad, 1,0,0);
        this.scene.rotate(90*this.scene.degreeToRad, 0,0,1);
        this.scene.cone.display();
        this.scene.popMatrix();

        this.beakMaterial.apply();

        //bico
        this.scene.pushMatrix();
        this.scene.translate(-0.01,0.8,1.34);
        this.scene.rotate(20*this.scene.degreeToRad, 0,0,1);
        this.scene.rotate(-10*this.scene.degreeToRad, 1,0,0);
        this.scene.scale(0.3,0.3,0.9);
        this.scene.rotate(90*this.scene.degreeToRad, 1,0,0);
        this.scene.beak.display();
        this.scene.popMatrix();

        if(this.caught){
            this.branchMaterial.apply();
            this.scene.pushMatrix();
            this.scene.rotate(Math.PI / 2,0,0,1);
            this.scene.translate(.8,-0.5,1.7);
            this.scene.scale(0.1, 1, 0.1);
            this.birdStick.display();
            this.scene.popMatrix();
        }

        //eyes
        this.eye.apply();
        this.scene.pushMatrix();
        this.scene.translate(-0.22,1.1,1.35);
        this.scene.scale(0.2,0.2,0.2);
        this.scene.rotate(90*this.scene.degreeToRad, 1,0,0);
        this.scene.eye.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.21,1.1,1.35);
        this.scene.scale(0.2,0.2,0.2);
        this.scene.rotate(90*this.scene.degreeToRad, 1,0,0);
        this.scene.eye.display();
        this.scene.popMatrix();

        this.featherMaterial.apply();
        this.scene.pushMatrix();
        this.scene.rotate(this.wingAngle/2.0, 0,0,1);
        //asa direita
        this.scene.pushMatrix();
        this.scene.translate(1.0,0.2,0);
        this.scene.rotate(15*this.scene.degreeToRad, 0,0,1);
        this.scene.scale(0.8,0.8,0.8);
        this.scene.scale(1,1,1);

        this.scene.pushMatrix();
        this.scene.rotate(90*this.scene.degreeToRad, 1,0,0);
        this.scene.plane.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(-90*this.scene.degreeToRad, 1,0,0);
        this.scene.plane.display();
        this.scene.popMatrix();

        this.scene.popMatrix();

        //triangulos asa direita
        this.scene.pushMatrix();
        this.scene.translate(1.77,0.2,0);
        this.scene.rotate(-15*this.scene.degreeToRad, 0,0,1);
        this.scene.scale(0.4,1,0.4);

        this.scene.pushMatrix();
        this.scene.rotate(90*this.scene.degreeToRad, 0,1,0);
        this.scene.rotate(90*this.scene.degreeToRad, 1,0,0);
        this.scene.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(-90*this.scene.degreeToRad, 1,0,0);
        this.scene.triangle.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
        this.scene.popMatrix(); //MOVIMENTO ASA DIREITA

        this.scene.pushMatrix();
        this.scene.rotate(-this.wingAngle/2.0, 0,0,1);

        //asa esquerda
        this.scene.pushMatrix();
        this.scene.translate(-1.0,0.2,0);
        this.scene.rotate(-15*this.scene.degreeToRad, 0,0,1);
        this.scene.scale(0.8,0.8,0.8);
        this.scene.scale(1,1,1);

        this.scene.pushMatrix();
        this.scene.rotate(90*this.scene.degreeToRad, 1,0,0);
        this.scene.plane.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(-90*this.scene.degreeToRad, 1,0,0);
        this.scene.plane.display();
        this.scene.popMatrix();

        this.scene.popMatrix();

        //triangulos asa esquerda
        this.scene.pushMatrix();
        this.scene.translate(-1.77,0.2,0);
        this.scene.rotate(15*this.scene.degreeToRad, 0,0,1);
        this.scene.scale(0.4,1,0.4);
        this.scene.rotate(90*this.scene.degreeToRad, 0,1,0);

        this.scene.pushMatrix();
        this.scene.rotate(90*this.scene.degreeToRad, 0,1,0);
        this.scene.rotate(90*this.scene.degreeToRad, 1,0,0);
        this.scene.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(-90*this.scene.degreeToRad, 1,0,0);
        this.scene.triangle.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
        this.scene.popMatrix(); //MOVIMENTO ASA ESQUERDA

        this.scene.pushMatrix();
        this.scene.rotate(-this.wingAngle/5.0, 1,0,0);
        //cauda
        this.scene.pushMatrix();
        this.scene.translate(0,0.4,-1.5);
        this.scene.rotate(15*this.scene.degreeToRad, 1,0,0);
        this.scene.scale(0.4,1,1.1);
        this.scene.rotate(45*this.scene.degreeToRad, 0,1,0);

        this.scene.pushMatrix();
        this.scene.rotate(90*this.scene.degreeToRad, 0,1,0);
        this.scene.rotate(90*this.scene.degreeToRad, 1,0,0);
        this.scene.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(-90*this.scene.degreeToRad, 1,0,0);
        this.scene.triangle.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
        this.scene.popMatrix(); //MOVIMENTO CAUDA


        this.scene.popMatrix()//MOVIMENTO GERAL
    }


    move(d) {
        if(this.x > 24) {
            this.x = 24;
        } else if(this.x < -24) {
            this.x = -24;
        }
        if(this.z > 24) {
            this.z = 24;
        } else if(this.z < -24) {
            this.z = -24;
        }

        this.x += 0.7*d*Math.cos(this.scene.degreeToRad*this.orientation);
        this.z -= 0.7*d*Math.sin(this.scene.degreeToRad*this.orientation);

    }

    rotate(speedFactor,dir) {

        if(dir) {
            this.orientation+= speedFactor*7;
        }
        else {
            this.orientation-= speedFactor*7;
        }

    }

    accelerate(factor,s) {

        if(this.speed == 0) {
            this.speed = factor;
        }

        if(s) {
            this.speed *= 1 + factor;
        } else {
            this.speed *= 1/(1+factor);
        }

        if(this.speed < 0) {
            this.speed = 0;
        } else if(this.speed > 15) {
            this.speed = 15;
        }
    }

    resetValues() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.speed = 0;
        this.orientation = 0;
        this.catching = false;
        this.caught = false;
        this.flyDown = true;
        this.flyUp = false;
    }

    fly(t, factor) {
        this.y = 0.25*Math.sin(2*Math.PI* t/1000*factor + Math.PI) + 9;
        this.wingAngle = Math.PI/4* Math.sin(2*Math.PI*t/1000*factor);
    }

    catch(t, factor) {
        if(this.timeMarker == -1) {
            this.timeMarker = t;
        }

        if(this.flyDown) {
            if(t < this.timeMarker+1000) {
                this.y-= .15;
            } else if(t >= this.timeMarker+1000) {
                this.flyDown = false;
                this.flyUp = true;
                this.timeMarker = t;
            }
        }else if(this.flyUp) {
            if(t < this.timeMarker+1000) {
                this.y += .15;
                this.wingAngle = Math.PI/4* Math.sin(2*Math.PI*t/1000*factor);
            } else if(t >= this.timeMarker+1000) {
                this.catching = false;
                this.flyUp = false;
                this.flyDown = true;
                this.timeMarker = -1;
            }
        }
    }
}