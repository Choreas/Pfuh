# Pfuh
Mobile game prototype - Phaser3, cordova, typescript

## Setup
1. Install npm package manager, one way would be by installing Node.js (https://nodejs.org/)
2. Install typescript, possibly globally (npm install -g typescript)
3. Install Cordova (npm install cordova, npm install -g cordova)
4. Install dependencies inside root and www/ directories (npm install, cd www && npm install)
5. cd ..
6. Install cordova browser platform (cordova platform add browser)

Run in browser using the command npm run serve.

For windows: If execution of cordova and/or typescript fails due to unsigned powershell scripts, you could either sign those scripts yourself by creating a self signed certificate and adding it to your trusted root certificates, or by changing your script execution policy. Don't be careless about changing that policy, better try signing it.