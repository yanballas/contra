export class Gravity {
	#GRAVITY_FORCE = 0.01
	#JUMP_GRAVITY_FORCE = 0.01
	
	constructor(gravityForce = null, jumpForce = null) {
		if (gravityForce) this.#GRAVITY_FORCE = gravityForce
		if (jumpForce) this.#JUMP_GRAVITY_FORCE = jumpForce
	}
	
	get gravityForce() {
		return this.#GRAVITY_FORCE
	}
	
	get jumpForce() {
		return this.#JUMP_GRAVITY_FORCE
	}
}