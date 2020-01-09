// Data array to hold the questions and answers for the quiz
questions = [
				{
					q: "Where would you prefer to go on vacation?",
					o: [
						{ 
							answer: "lake tahoe", 
							value: 1
						},
						{
							answer: "bahamas", 
							value: 4 
						},
						{
							answer: "ireland", 
							value: 6
						},
						{
							answer: "new orleans", 
							value: 8
						}	
						]
			
				},
				{
					q: "Are you more likely to identify with the villain or protagonist?",
					o: [
						{
							answer: "protagonist", 
							value: 1
						}, 
		   				{
							answer: "villain", 
							value: 6
		  				}
						]
					},
						{
					q: "Do you like being the center of attention, or a wall flower?",
					o: [
						{
							answer: "attention seeker", 
							value: 5
						}, 
						{
							answer: "wall-flower", 
							value: 2
						}], 
		
				},
				{
					q: "Do you think getting engaged on TV after a few dates is a good idea?",
					o: [{
						answer: "hell ya", 
						value: 4
						}, 
						{
						answer: "hell no", 
						value: 2
						}]	
				}
			]
// Data on each of the results for the quiz. Much of this will not be used in the first release of the quiz.
bachelorCharacters = [
	{
		name: "Nick Viall", 
		bachelorInParadise: true,
		successfulRelationship: false, 
		wasLead: true, 
		numOfSeasons: 3,
		travelSpots: ['mexico'],
		isVillain: true, 
	},

	{
		name: "Kaitlyn Bristowe",
		bachelorInParadise: false, 
		successfulRelationship: true,
		wasLead: true,
		numOfSeasons: 2,
		travelSpots: ['ireland'],
		isVillain: false, 
	}, 

	{
		name: "Ben Higgins",
		bachelorInParadise: false, 
		successfulRelationship: false,
		wasLead: true,
		numOfSeasons: 2,
		travelSpots: ['bahamas'],
		isVillain: false, 
	},

	{
		name: "Bekah Martinez",
		bachelorInParadise: false, 
		successfulRelationship: false,
		wasLead: false,
		numOfSeasons: 1,
		travelSpots: ['lake tahoe'],
		isVillain: false, 
	}
]

const bachelorApp = {
	startQuiz : function() {
		const wrapper = document.getElementById("quiz-wrap");

		for(let item in questions){
			let number = parseInt(item) + 1;
			// Create the div that will hold the question 
			const qWrapper = document.createElement("div")
			qWrapper.classList.add("question");
			let questionTitle = document.createElement("h2");
			questionTitle.innerHTML = questions[item]["q"];

			qWrapper.appendChild(questionTitle);

			const options = questions[item]["o"]
			options.forEach((item) => {


				let questionLabel = document.createElement("label")
		
				qWrapper.appendChild(questionLabel)

				let option = document.createElement("input");
				option.type = "radio";
				option.value = item.value;
				option.required = true;
				option.classList.add("questionOption");

				option.name = "quiz-" + number;
				questionLabel.appendChild(option);

      			questionLabel.appendChild(option);

				let optionText = document.createTextNode(item.answer);
				questionLabel.appendChild(optionText);

			})

			wrapper.appendChild(qWrapper)
		}

			const submitButton = document.createElement("input");
			submitButton.type = "submit";
			submitButton.value = "Let's Go";
			submitButton.id = "submitButton";
			wrapper.appendChild(submitButton);
			submitButton.addEventListener("click", bachelorApp.submit);


	
	},

	submit: function (e) {
		e.preventDefault();
		e.stopPropagation();



		const selected = document.querySelectorAll(".questionOption:checked");
	
		const newArray = Array.from(selected)
		// console.log(newArray);
		const scoreArray = [];
		newArray.forEach((item) => {
			let score = parseInt(item.value)
			scoreArray.push(score)
		})
		
		scoreSum = scoreArray.reduce(function (a,b){
			return (a + b);
		},0)
		console.log(scoreSum);

		let answerTitle = "<h4>";

		let answerBody = "<p>";

		let answerImage = "";



  		  if (scoreSum >=0 && scoreSum<=7) {

  		    answerTitle += "You are Bekah Martinez! ";
			
			answerImage += `<img src="./styles/sass/assets/bekah.jpg">`
			

			answerBody += "You like to have fun, but you are also smart with a good head on your shoulders. Even though you enjoy the bachelor, you realize that finding your spouse after a total of 3 dates is a little strange.";



  		  } if (scoreSum>=8 && scoreSum <=12) {
   		   answerTitle += "You are Ben Higgins!";

		   answerImage += `<img src="./styles/sass/assets/ben.jpg">`


		   answerBody += "You are considered the nicest person in Bachelor Nation. You don't always need all eyes on you, however, often everyone's eyes are on you because you're so freakin' nice.";

   		 } if(scoreSum>=13 && scoreSum <=23){
    		  answerTitle += "You are Katilin Bristowe!";

			answerImage += `<img src="./styles/sass/assets/kaitlyn.jpg">`


			  answerBody += "You love having a couple of cocktails and having a grand old time. You like to be the center of attention, although you would never admit that.";
   		 } if(scoreSum >= 24){
				answerTitle += "You are Nick Viall!";

				answerImage += `<img src="./styles/sass/assets/nick.jpg">`


				answerBody += "Well, how do we put this, you are popular and know it. You want to be associated with bachelor nation until the day you die. You are not usually lucky in love, but somehow give great relationship advice.";


			}
			// Adding the answer in dynamically, by inserting an h4, and filling it with the appropriate text
  		  	answerTitle += "</h4>";
			answerBody += "</p>";

			
   			document.getElementById("results").innerHTML = answerTitle  + answerImage + answerBody;

			// Scroll to the bottom to read the results on click
			const scrollingElement = (document.scrollingElement || document.body);
			scrollingElement.scrollTop = scrollingElement.scrollHeight;

	}

	
};


// /* [INIT] */

document.addEventListener("DOMContentLoaded", function() {
	window.addEventListener("load", bachelorApp.startQuiz);
});

