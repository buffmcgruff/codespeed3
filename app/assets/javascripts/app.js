document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
    	secondsCount: 0,
    	countdown: 59,
    	errors: 0,
    	userText: '',
    	array1 =  
    	wpm: 0

    },
				
    methods:{
			addOneSecond: function() {
				this.countdown -= 1;
			},


			
			counter: function() {
				setInterval(this.addOneSecond, 1000, 0 );
			},
			
			submitCode: function() {
				// See the user's code they typed
				// See how long it took
				console.log("Code you typed: " + this.userText);

				var secondsElapsed = 59 - this.countdown;
				console.log("How long it took: " + secondsElapsed);
				this.act();

				// Launch modal
				$('#myModal').modal();
			},

			act: function() {
				var secondsElapsed = 59 - this.countdown;
				var word = this.userText.length / 5;
				this.wpm = word;
				// parseInt(this.userText)
				console.log("wpm:" +  word);
				
			},

			error: function(){
				var array1 = document.querySelector("#level_code").innerHTML;
				var array2 = 'this.userText'
				var length = array1.length;
				var mistakeCount = 0;

				for (var i = 0; i < length; i++) {
					if (array1[i] != array2[i]) {
						mistakeCount += 1;
					}
				}

				console.log("There were " + mistakeCount + " mistakes.")

				// Calcualte accuracy
				var percentageIncorrect = ((mistakeCount / length) * 100);
				var accuracy = 100 - percentageIncorrect;
				console
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






	