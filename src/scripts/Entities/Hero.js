import {Container, Graphics} from "../../libs/pixi.mjs";
import {Gravity} from "../Engine/Gravity.js";
import {Speed} from "../Engine/Speed.js";
import {$STATESCHARTER} from "../utils/states.js";

export class Hero extends Container {
	#gravity
	#speed
	#positionX;
	#positionY;
	
	#movement = {
		x: 0,
		y: 0
	}
	
	#directionMoveContext = {
		left: 0,
		right: 0,
	}
	
	#stateHero = $STATESCHARTER.stay
	
	constructor(_positionX, _positionY) {
		super();
		this.#gravity = new Gravity(0.01, 1.5);
		this.#speed = new Speed(2);
		this.#positionX = _positionX;
		this.#positionY = _positionY;
		const view = new Graphics()
		view.rect(0, 0, 20, 60)
		view.stroke(
			{width: 1, color: 0xff0000}
		)
		this.x = this.#positionX
		this.y = this.#positionY
		this.addChild(view)
	}
	
	update() {
		this.#speed.speedX = this.#movement.x * this.#speed.maxSpeed;
		this.x += this.#speed.speedX;
		
		this.#speed.speedY += this.#gravity.gravityForce
		this.y += this.#speed.speedY
	}
	
	stay() {
		this.#speed.speedY = 0
		this.#stateHero = $STATESCHARTER.stay
	}
	
	jump() {
		if (this.#stateHero === $STATESCHARTER.jump) return
		this.#stateHero = $STATESCHARTER.jump
		this.#speed.speedY -= this.#gravity.jumpForce
	}
	
	startMove(direction) {
		switch (direction) {
			case 'ArrowLeft':
				this.#directionMoveContext.left = -1
				this.#movement.x = -1
				break;
			case 'ArrowRight':
				this.#directionMoveContext.right = 1
				this.#movement.x = 1
				break;
			case 'ArrowUp':
				this.jump()
				break;
		}
	}
	
	stopMove(direction) {
		switch (direction) {
			case 'ArrowLeft':
				this.#directionMoveContext.left = 0
				this.#movement.x = this.#directionMoveContext.right
				break;
			case 'ArrowRight':
				this.#directionMoveContext.right = 0
				this.#movement.x = this.#directionMoveContext.left
				break;
		}
	}
}