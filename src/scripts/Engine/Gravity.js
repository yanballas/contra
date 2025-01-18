export class Gravity {
	#GRAVITY_FORCE = 0.01
	
	constructor(gravityForce = null) {
		if (gravityForce) this.#GRAVITY_FORCE = gravityForce
	}
	
	get gravityForce() {
		return this.#GRAVITY_FORCE
	}
}