import {Container, Graphics} from "../../libs/pixi.mjs";

export class Platform extends Container {
	#positionX;
	#positionY;
	
	constructor(_positionX, _positionY) {
		super();
		this.#positionX = _positionX;
		this.#positionY = _positionY;
		const view = new Graphics()
		view.rect(0, 0, 200, 30)
		view.stroke({width: 1, color: 0x00ff00})
		this.x = this.#positionX
		this.y = this.#positionY
		this.addChild(view)
	}
	
	addPlatform(array) {
		array.push(this)
	}
	
}