function Car(pnum, model, color){

	this.pnum = pnum;
	this.model = model;
	this.color = color;
	this.speed = 0;

	this.startCar = startCar;
	this.stopCar = stopCar;
	this.accelerate = accelerate;
	this.decelerate = decelerate;
	this.repaintCar = repaintCar;
}

function startCar(){
	this.speed = 10;
}

function stopCar(){
	this.speed = 0;
}

function accelerate(n){
	this.speed+=n;
}

function decelerate(n){
	this.speed+=n;
}

function repaintCar(color){
	this.color = color;
}

