import {Hero} from "./Entities/Hero.js";
import {Platform} from "./Entities/Platform.js";
import {KeyBoardProcessor} from "./Engine/KeyBoardProcessor.js";

export class Game {
	#pixiApp;
	#hero;
	#platforms = [];
	#controlKeys = {}
	#keyBoardProcessor;
	
	constructor(_pixiApp) {
		this.#pixiApp = _pixiApp
		this.#hero = new Hero(40, 100)
		this.#pixiApp.stage.addChild(this.#hero)
		
		new Platform(100, 400).addPlatform(this.#platforms);
		new Platform(300, 400).addPlatform(this.#platforms);
		new Platform(500, 400).addPlatform(this.#platforms);
		
		new Platform(700, 400).addPlatform(this.#platforms);
		new Platform(900, 400).addPlatform(this.#platforms);
		new Platform(300, 550).addPlatform(this.#platforms);
		
		new Platform(0, 738).addPlatform(this.#platforms);
		new Platform(200, 738).addPlatform(this.#platforms);
		new Platform(400, 700).addPlatform(this.#platforms);
		
		this.#platforms.forEach(platform => {
			this.#pixiApp.stage.addChild(platform)
		})
		
		this.#controlKeys = {
			ArrowLeft: {
				isDown: false,
			},
			ArrowRight: {
				isDown: false,
			},
			ArrowUp: {
				isDown: false,
			},
			ArrowDown: {
				isDown: false,
			},
			Space: {
				isDown: false,
			},
		}
		this.#keyBoardProcessor = new KeyBoardProcessor(this.#hero, this.#controlKeys);
	}
	
	handlerKeyboardAction(event, eventName) {
		this.#keyBoardProcessor?.onPressKey(event, eventName);
	}
	
	isCheckCollision(entity, area) {
		return entity.x < area.x + area.width &&
			entity.x + entity.width > area.x &&
			entity.y < area.y + area.height &&
			entity.y + entity.height > area.y;
	}
	
	update() {
		const previousPoint = {
			x: this.#hero.x,
			y: this.#hero.y
		}
		
		this.#hero.update()
		
		this.#platforms.forEach(platform => {
			
			if (this.#hero.isJump()) return
			
			const resultCollision = this.resultEntityCollision(this.#hero, platform, previousPoint);
			
			if (resultCollision.vertical) {
				this.#hero.stay();
			}
		})
	}
	
	resultEntityCollision(charter, platform, previousPoint) {
		const collisionResult = this.checkResultEntityCollision(charter, platform, previousPoint);
		
		if (collisionResult.vertical) {
			charter.y = previousPoint.y
		}
		
		return collisionResult
	}
	
	checkResultEntityCollision(rectangleA, rectangleB, previousPointRectangleA) {
		const collisionResult = {
			horizontal: false,
			vertical: false,
		}
		
		let isCollision = this.isCheckCollision(rectangleA, rectangleB)
		if (!isCollision) return collisionResult;
		
		rectangleA.y = previousPointRectangleA.y
		
		isCollision = this.isCheckCollision(rectangleA, rectangleB)
		if (!isCollision) {
			collisionResult.vertical = true
			return collisionResult
		}
		
		collisionResult.horizontal = true
		return collisionResult
	}
}