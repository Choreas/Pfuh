module Main {
	document.addEventListener("deviceready", onDeviceReady, false);
	//	100% of the browser window - see Boot.js for additional configuration
	var game = new Phaser.Game({ width: "100%", height: "100%", type: Phaser.AUTO });
	function onDeviceReady() {
		game.scene.add("Boot", Scenes.Boot);
		game.scene.add('MainMenu', Scenes.MainMenu);
		game.scene.start('Boot');
	}
}
