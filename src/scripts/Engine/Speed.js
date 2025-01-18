export class Speed {
	#speedX = 0
	#speedY = 0
	
	constructor(_speedX = null, _speedY = null) {
		if (_speedX) this.#speedX = _speedX;
		if (_speedY) this.#speedY = _speedY;
		
	}
	
	get speedX() {
		return this.#speedX
	}
	
	get speedY() {
		return this.#speedY
	}
	
	set speedX(newSpeedX) {
		this.#speedX = newSpeedX
	}
	
	set speedY(newSpeedY) {
		this.#speedY = newSpeedY
	}
}