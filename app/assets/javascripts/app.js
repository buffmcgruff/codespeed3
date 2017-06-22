document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
    	secondsCount: 0,
    	countdown: 60,
    	countdownStarted: false,
    	mistakeCount: 0,
    	userText: '',
    	wpm: 0,
    	accuracy: 0
    },
    mounted: function() {
    },	
    methods:{
			addOneSecond: function() {
				if (this.countdown >= 0) {

					this.countdown -= 1;
					if (this.countdown == 0) {
				 		this.submitCode();
				 		
				  }
				}

			},


			
			counter: function() {
				this.countdownStarted = true;
			 	setInterval(this.addOneSecond, 1000, 0 ) ;
			},
			
			submitCode: function() {
				// See the user's code they typed
				// See how long it took
				console.log("Code you typed: " + this.userText);

				var secondsElapsed = 60 - this.countdown;
				console.log("How long it took: " + secondsElapsed);
				this.act();
				this.error();

				// Launch modal
				$('#myModal').modal();
			},

			act: function() {
				var secondsElapsed = 60 - this.countdown;
				var minutesElapsed = secondsElapsed / 60;
				var number_of_words = this.userText.length / 5; // word gives the number of words in the code
				this.wpm = number_of_words / minutesElapsed;
				this.wpm = Math.round( this.wpm)
				// parseInt(this.userText)
				
				
			},

			startedTyping: function () {
				console.log("a key was typed");
				if (this.countdownStarted == false) {
					this.counter();
				}

				var level_code = document.querySelector("#level_code_raw").innerHTML;
				level_code = level_code.trim();

				if (level_code.length == this.userText.length) {
					this.submitCode();
				}

			},

			error: function() {
				var array1 = document.querySelector("#level_code_raw").innerHTML;
				array1 = array1.trim();

				var array2 = this.userText;

				console.log("Given code:" + array1);
				console.log("Your code:" + array2);

				var length = array1.length;
				console.log(length)

				for (var i = 0; i < length; i++) {
					if (array1[i] != array2[i]) {
						this.mistakeCount += 1;
					}
				}

				console.log("There were " + this.mistakeCount + " mistakes.")

				// Calcualte accuracy
				var percentageIncorrect = ((this.mistakeCount / length) * 100);
				this.accuracy = 100 - percentageIncorrect;
				this.accuracy = Math.round(this.accuracy)  
				 }
			


				
		}//methods
  });
});


// var array1 = '1234567890'
// // var array1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

// var array2 = '1234567899'
// // var array2 = ['1', '2', '3', '4', '6', '8', '9', '8', '9', '0']
// var mistakeCount = 0;

// function compareArrays() {
// 	var length = array1.length;

// 	for (var i = 0; i < length; i++) {
// 		if (array1[i] != array2[i]) {
// 			mistakeCount += 1;
// 		}
// 	}

// 	console.log("There were " + mistakeCount + " mistakes.")

// 	// Calcualte accuracy
// 	var percentageIncorrect = ((mistakeCount / length) * 100);
// 	var accuracy = 100 - percentageIncorrect;
// 	console.log( "Accuracy: " + accuracy + "%");
// }






	