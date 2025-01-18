import {Hero} from "./Entities/Hero.js";
import {Platform} from "./Entities/Platform.js";

export class Game {
	#pixiApp;
	#hero;
	#platforms = [];
	
	constructor(_pixiApp) {
		this.#pixiApp = _pixiApp
		this.#hero = new Hero(40, 100)
		this.#pixiApp.stage.addChild(this.#hero)
		
		const platform1 = new Platform(200, 300)
		const platform2 = new Platform(400, 250)
		const platform3 = new Platform(0, 250)
		this.addPlatform(platform1);
		this.addPlatform(platform2);
		this.addPlatform(platform3);
		
		this.#platforms.forEach(platform => {
			this.#pixiApp.stage.addChild(platform)
		})
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
		
		this.#platforms.forEach((platform) => {
			let isCollision = this.isCheckCollision(this.#hero, platform)
			if (!isCollision) return;
			
			const currentY = this.#hero.y
			this.#hero.y = previousPoint.y
			
			isCollision = this.isCheckCollision(this.#hero, platform)
			if (!isCollision) return this.#hero.stay()
			
			this.#hero.y = currentY
			this.#hero.x = previousPoint.x
		})
	}
	
	isCheckCollision(entity, area) {
		return entity.x < area.x + area.width &&
			entity.x + entity.width > area.x &&
			entity.y < area.y + area.height &&
			entity.y + entity.height > area.y;
	}
}