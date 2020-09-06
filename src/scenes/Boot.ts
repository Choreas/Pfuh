namespace Scenes {
	export class Boot extends Phaser.Scene {
		constructor() {
			super('Boot');
		}
		init(): void {
		}
		preload(): void {
			this.load.image('starfield', './assets/images/starfield.png');
		}
		create(): void {
			this.scene.start('MainMenu');
		}
	}
}