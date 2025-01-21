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
		
		this.addPlatform(new Platform(100, 400));
		this.addPlatform(new Platform(300, 400));
		this.addPlatform(new Platform(500, 400));
		
		this.addPlatform(new Platform(700, 400));
		this.addPlatform(new Platform(900, 400));
		this.addPlatform(new Platform(300, 550));
		
		this.addPlatform(new Platform(0, 738));
		this.addPlatform(new Platform(200, 738));
		this.addPlatform(new Platform(400, 700));
		
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
		}
		this.#keyBoardProcessor = new KeyBoardProcessor(this.#hero, this.#controlKeys);
	}
	
	addPlatform(platform) {
		this.#platforms.push(platform)
	}
	
	update() {
		const previousPoint = {
			x: this.#hero.x,
			y: this.#hero.y
		}
		
		this.#hero.update()
		
		this.#platforms.forEach(platform => {
			
			if (this.#hero.isJump()) return
			
			const resultCollision = this.resultEntityCollision(this.#hero, previousPoint, platform);
			
			if (resultCollision.vertical) {
				this.#hero.stay();
			}
		})
	}
	
	isCheckCollision(entity, area) {
		return entity.x < area.x + area.width &&
			entity.x + entity.width > area.x &&
			entity.y < area.y + area.height &&
			entity.y + entity.height > area.y;
	}
	
	resultEntityCollision(charter, previousPoint, platform) {
		const collisionResult = {
			horizontal: false,
			vertical: false,
		}
		
		let isCollision = this.isCheckCollision(charter, platform)
		if (!isCollision) return collisionResult;
		
		const currentY = charter.y
		charter.y = previousPoint.y
		
		isCollision = this.isCheckCollision(charter, platform)
		if (!isCollision) {
			collisionResult.vertical = true
			return collisionResult
		}
		
		charter.y = currentY
		charter.x = previousPoint.x
		collisionResult.horizontal = true
		return collisionResult
	}
	
	handlerKeyboardAction(event, eventName) {
		this.#keyBoardProcessor?.onPressKey(event, eventName);
	}
}