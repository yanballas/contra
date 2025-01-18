import {Container, Graphics} from "../../libs/pixi.mjs";
import {Gravity} from "../Engine/Gravity.js";
import {Speed} from "../Engine/Speed.js";

export class Hero extends Container {
	#gravity
	#speed
	#positionX;
	#positionY;
	
	constructor(_positionX, _positionY) {
		super();
		this.#gravity = new Gravity();
		this.#speed = new Speed();
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
		this.#speed.speedY += this.#gravity.gravityForce
		this.y += this.#speed.speedY
	}
	
	stay() {
		this.#speed.speedY = 0
	}
}