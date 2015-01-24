;(function(window, document, undefined){
	'use strict';

	function Game(){

		var self = this,
			timer,
			meta = {
				score: 0,
				highestScore: 0,
				level: 1,
				levels: 5
			},
			elements = {
				person: document.querySelector('.person'),
				obstacle: document.querySelector('.obstacle'),
				score: document.getElementById('metaScore'),
				level: document.getElementById('metaLevel'),
				highestScore: document.getElementById('metaHighest')
			},
			constants = {
				jumpClass: 'jumped'
			};

		self.start = function(){
			jump();

			timer = setInterval(function(){				
				moveObstacles();
				moveBackgrounds();
				detectCollision();
				updateScore();
			},100)
		};

		self.pause = function(){};
		self.resume = function(){};
		self.restart = function(){self.start(); };
		self.stop = function(){
			// storeState(meta);
			clearTimeout(timer);
		};

		self.mute = function(){
			var isMute = localStorage.getItem('mute') ? true : false;
			localStorage.setItem('isMute', isMute);
		};

		self.changeAvatar = function(){
			var isMale = localStorage.getItem('gender') === 'M' ? true : false;
			localStorage.setItem('isMale', isMale);
		}

		function jump(){
			document.addEventListener('keyup', function(e){
				e.preventDefault();
				if(e.keyCode === 32) {
					elements.person.classList.add(constants.jumpClass);
					var _timer = setTimeout(function(){
						elements.person.classList.remove(constants.jumpClass);
						clearTimeout(_timer);
					},500);
				}
			}, true);
		}

		function moveObstacles(){}

		function moveBackgrounds(){}

		function detectCollision(){
			// var collide = false;
			// if(collide) {
			// 	self.playSound('collide');
			// 	self.stop();
			// }
		}

		function playSound(){}

		function updateScore(){
			meta.score++;
			elements.score.innerText = meta.score;
			console.count('updateScores');
			if(meta.score%100 == 0) {
				updateLevel();
				// self.stop();
			}
		}
		function updateLevel(){
			meta.level++;
			elements.level.innerText = meta.level;
			console.count('updateLevel');
		}

		function storeState(s,hs,l, mute){
			var obj = {
				score:s,
				highScore: hs,
				level:l
			}

			for(keys in obj) {
				localStorage.setItem(keys, obj[keys]);
			}

		}

		self.init = function(){
			console.log('start...')
			self.start();
		}

	}

	var _spacebar = new Game();
	_spacebar.init();


})(window, document);