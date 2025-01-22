export class KeyBoardProcessor {
	#charter
	#currentKeys = {}
	#eventNames = {
		keydown: 'keydown',
		keyup: 'keyup'
	}
	
	constructor(charter, keys) {
		this.#charter = charter
		this.#currentKeys = keys
	}
	
	onPressKey(event, eventName) {
		for (const key of Object.keys(this.#currentKeys)) {
			if (key === event.code) {
				switch (eventName) {
					case this.#eventNames.keydown:
						this.#charter.startMove(key, this.#currentKeys);
						this.#currentKeys[key].isDown = true;
						break;
					case this.#eventNames.keyup:
						this.#charter.stopMove(key, this.#currentKeys);
						this.#currentKeys[key].isDown = false;
						break;
				}
				break;
			}
		}
	}
}