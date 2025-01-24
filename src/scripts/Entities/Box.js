import {Container, Graphics} from "../../libs/pixi.mjs";

export class Box extends Container {
	
	type = 'box'
	
	#isStep = false;
	#positionX;
	#positionY;
	
	constructor(_positionX, _positionY) {
		super();
		this.#positionX = _positionX;
		this.#positionY = _positionY;
		const view = new Graphics()
		view.rect(0, 0, 200, 30)
		view.stroke({width: 3, color: 0x00ff20})
		view.lineTo({x: 200, y: 30});
		this.x = this.#positionX
		this.y = this.#positionY
		this.addChild(view)
	}
	
	
	addBox(array) {
		array.push(this)
	}
	
	get isStep() {
		return this.#isStep;
	}
	
	set isStep(newValue) {
		this.#isStep = newValue;
	}
}