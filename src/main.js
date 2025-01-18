import './style.css'
import * as Pixi from './libs/pixi.mjs'
import {Game} from "./scripts/Game.js";


document.addEventListener('DOMContentLoaded', () => {
	(async () => {
		const _pixiApp = new Pixi.Application();
		await _pixiApp.init({background: '0x000000', width: 1024, height: 768});
		const GameInstance = new Game(_pixiApp)
		_pixiApp.ticker.add(GameInstance.update, GameInstance)
		document.getElementById('app').appendChild(_pixiApp.canvas)
		
	})()
})