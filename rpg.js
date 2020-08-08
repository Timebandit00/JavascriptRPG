
function update1() {
	updateMessage = document.getElementById('messageArea');
	updateMessage.innerHTML = 'Level: ' + player.level + '  Health: ' + player.health + '  Mana: ' + player.mana;
}

function update2() {
	updateMessage1 = document.getElementById('messageArea1');
	updateMessage1.innerHTML = 'Please kill the ' + enemy.name + '!   ' + enemy.name + ' health:' + enemy.health;
}

//enemy object constructor
function Enemy(name, health, num) {
	this.name = name,
		this.health = health,
		this.num = num,
		this.getAttacked = function () {
			if (this.health > 0) {
				this.health = this.health - player.weapon.damage;
				console.log(this.health);
				update2();
			} else {
				console.log('You killed the ' + name + '!');
				updateMessage1 = document.getElementById('messageArea1');
				updateMessage1.innerHTML = "You killed the " + this.name + '!';
			}
		}
}

//creating new enemy objects
var greenGoblin = new Enemy('green goblin', 15, 0);
var dragon = new Enemy('dragon', 100, 1);
var demon = new Enemy('demon', 85, 2);
var orc = new Enemy('orc', 70, 3);
var bandit = new Enemy('bandit', 40, 4)

var enemyList = [];

enemyList.push(greenGoblin, dragon, demon, orc, bandit);

var images = []; //array

images[0] = 'url(./images/greenGoblin.jpg)';
images[1] = 'url(./images/dragon.jpg)';
images[2] = 'url(./images/demon.jpg)';
images[3] = 'url(./images/orc.jpg)';
images[4] = 'url(./images/bandit.jpg)';

// Closure spawning an enemy
function enemySpawn() {
	var randFive = Math.floor(Math.random() * images.length);
	var image = images[randFive];
	var srcEnemy = document.getElementById('enemyArea');
	srcEnemy.style.backgroundImage = image;
		function whichEnemy() {
			enemy = enemyList[randFive];
	}
	whichEnemy();
}

//weaopon object constructor
function Weapon(damage) {
	this.damage = damage;
}

//creating new weaopon objects
var sword = new Weapon(10);
var dagger = new Weapon(5);
var fire = new Weapon(20);
var water = new Weapon(15);
var lightning = new Weapon(28);
var ice = new Weapon(17);
var gust = new Weapon(8);
var curse = new Weapon(100);

var weapons = []; //array
weapons.push(sword, dagger); //puts weapon objects in weapon array
weapons.push(fire, water, lightning, ice, gust, curse); //puts spells in the weapons array

function HealthPotion() {
	player.health = player.health + 25;
	update1();
}

function ManaPotion() {
	player.mana = player.mana + 20;
	update1();
}


//player object
var player = {
	health: 100,
	mana: 100,
	level: 1,
	weaponEquiped: false,
	weapon: 'nothing',
	equip: function (weapon) {
			this.weapon = weapon;
			this.weaponEquiped = true;
			
	},
	attack: function (enemy) {
			if (player.weaponEquiped) {
				enemy.getAttacked();

			} else {
				console.log('player has no weapon');
			}
	}
}


//creates and image element and displays the sword sprite inside
var swordImg = document.createElement('img');
swordImg.src = 'sword.jpg';
var src = document.getElementById('10');
src.appendChild(swordImg);


//creates an image element and displays the dagger sprite inside
var daggerImg = document.createElement('img');
daggerImg.src = 'dagger.jpg';
var srcDagger = document.getElementById('11');
srcDagger.appendChild(daggerImg);

var fireImg = document.createElement('img');
fireImg.src = 'fire.jpg';
var srcFire = document.getElementById('20')
srcFire.appendChild(fireImg);

var waterImg = document.createElement('img');
waterImg.src = 'water.jpg';
var srcWater = document.getElementById('21')
srcWater.appendChild(waterImg);

var lightningImg = document.createElement('img');
lightningImg.src = 'lightning.jpg';
var srcLightning = document.getElementById('30')
srcLightning.appendChild(lightningImg);

var iceImg = document.createElement('img');
iceImg.src = 'iceShard.jpg';
var srcIce = document.getElementById('31')
srcIce.appendChild(iceImg);

var gustImg = document.createElement('img');
gustImg.src = 'gust.jpg';
var srcGust = document.getElementById('40')
srcGust.appendChild(gustImg);

var curseImg = document.createElement('img');
curseImg.src = 'curse.jpg';
var srcCurse = document.getElementById('41')
srcCurse.appendChild(curseImg);

var healthPotionImg = document.createElement('img');
healthPotionImg.src = 'healthPotion.jpg';
var srcHealthPotion = document.getElementById('00')
srcHealthPotion.appendChild(healthPotionImg);

var manaPotionImg = document.createElement('img');
manaPotionImg.src = 'manaPotion.jpg';
var srcManaPotion = document.getElementById('01')
srcManaPotion.appendChild(manaPotionImg);


//creates scene image using town.jpg and appends it to the board element
function createTown() {
	var sceneImg = document.createElement('img');
	sceneImg.src = 'town.jpg';
	var srcScene = document.getElementById('board');
	srcScene.appendChild(sceneImg);

}

createTown();
enemySpawn();
update1();
update2();
