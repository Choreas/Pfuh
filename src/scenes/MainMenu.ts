module Scenes {
	export class MainMenu extends Phaser.Scene {
		public bg!: Phaser.GameObjects.TileSprite;
		private text!: Phaser.GameObjects.Text;
		constructor() {
			super('MainMenu');
		}

		create() {
			this.bg = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, 'starfield').setOrigin(0);

			this.text = this.add.text(this.scale.width * 0.5, this.scale.height * 0.5, 'Tap to Start!', {
				font: '42px Arial', fill: '#ffffff', align: 'center'
			}).setInteractive();
			this.text.on('pointerdown', this.startGame, this);
		}

		update() {
			//	Do some nice funky main menu effect here
		}

		resize(width: number, height: number) {
			//	If the game container is resized this function will be called automatically.
			//	You can use it to align sprites that should be fixed in place and other responsive display things.
			this.bg.width = width;
			this.bg.height = height;
		}

		startGame() {
			console.log('clicked!');
			// this.scene.start("Game");
		}
	}
}
