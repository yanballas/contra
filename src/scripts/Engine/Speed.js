export class Speed {
	#maxSpeed = 0
	#speedX = 0
	#speedY = 0
	
	constructor(_maxSpeed = null, _speedX = null, _speedY = null) {
		if (_maxSpeed) this.#maxSpeed = _maxSpeed;
		if (_speedX) this.#speedX = _speedX;
		if (_speedY) this.#speedY = _speedY;
		
	}
	
	get maxSpeed() {
		return this.#maxSpeed;
	}
	
	get speedX() {
		return this.#speedX
	}
	
	get speedY() {
		return this.#speedY
	}
	
	set maxSpeed(newMaxSpeed) {
		this.#maxSpeed = newMaxSpeed;
	}
	
	set speedX(newSpeedX) {
		this.#speedX = newSpeedX
	}
	
	set speedY(newSpeedY) {
		this.#speedY = newSpeedY
	}
}