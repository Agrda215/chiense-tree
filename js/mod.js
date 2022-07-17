let modInfo = {
	name: "The Chiense Tree",
	id: "A215TCT",
	author: "Agrda215",
	pointsName: "points",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 24,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "1.0.0",
	name: "Start",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v1.0.0 - Start</h3><br>
		- Imporved U+4E00 and Nothing<br>
    - Imporved U+4E01 and The Math<br>
    - Imporved U+4E02 and Brick Clicker<br>
    - Added 32 Achievements`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
  if (hasUpgrade("chi1", 11)) gain = gain.times(upgradeEffect("chi1", 11))
  if (hasUpgrade("chi1", 12)) gain = gain.times(upgradeEffect("chi1", 12))
  if (hasUpgrade("chi1", 14)) gain = gain.times(upgradeEffect("chi1", 14))
  if (hasUpgrade("chi1", 21)) gain = gain.times(upgradeEffect("chi1", 21))
  if (hasUpgrade("chi1", 22)) gain = gain.times(upgradeEffect("chi1", 22))
  if (hasUpgrade("chi1", 23)) gain = gain.times(upgradeEffect("chi1", 23))
  if (hasUpgrade("chi1", 24)) gain = gain.times(upgradeEffect("chi1", 24))
  if (hasUpgrade("chi1", 25)) gain = gain.times(upgradeEffect("chi1", 25))
  if (hasUpgrade("chi1", 31)) gain = gain.times(upgradeEffect("chi1", 31))
  if (hasUpgrade("chi1", 33)) gain = gain.times(upgradeEffect("chi1", 33))
  if (hasUpgrade("chi2", 11)) gain = gain.times(3)
  if (hasUpgrade("chi2", 12)) gain = gain.times(player.chi2.points.add(1).sqrt())
  if (hasUpgrade("chi2", 23)) gain = gain.times(1e6)
  if (hasUpgrade("chi2", 24)) gain = gain.pow(2)
  if (hasChallenge("chi1", 11)) gain = gain.times(3)
  if (hasChallenge("chi1", 12)) gain = gain.times(10)
  if (hasChallenge("chi1", 13)) gain = gain.times(10)
  gain = gain.times(buyableEffect("chi1", 11))
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(86400) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}