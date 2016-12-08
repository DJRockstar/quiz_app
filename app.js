
var quiz = 
	[
     {image: "images/a_lincoln.jpg", 
	  answer: "Abraham Lincoln",
	  options:['George Bush', 'Abraham Lincoln','Thomas Jefferson', 'Kanye West'],
	  },
	 {image: "images/b_obama.jpg", 
	  answer: 'Barack Obama',
	  options:['George Bush', 'Barack Obama','Thomas Jefferson', 'Donald Trump']
	  },
	 {image: "images/g_ford.jpg", 
	  answer: 'Gerald Ford',
	  options:['Harry Truman', 'Ben Franklin','Gerald Ford', 'Richard Nixon']
	  },
	 {image: "images/t_jefferson.jpg", 
	  answer: 'Thomas Jefferson',
	  options:['Woodrow Wilson', 'Richard Pierce','Thomas Jefferson', 'Kanye West']
	  },
	 {image: "images/g_cleveland.jpg", 
	  answer: 'Grover Cleveland',
	  options:['George Bush', 'Grover Cleveland','Thomas Jefferson', 'Theodore Roosevelt']
	  },		  		  
	 {image: "images/j_kennedy.jpg", 
	  answer: 'John F Kennedy',
	  options:['George Bush', 'John F Kennedy','Thomas Jefferson', 'Kanye West']
	  },
	 {image: "images/nixon.jpg", 
	  answer: 'Richard Nixon',
	  options:['George Bush', 'Richard Nixon','Thomas Jefferson', 'Hilary Clinton']
	  },
	 {image: "images/g_washington.jpg", 
	  answer: 'George Washington',
	  options:['George Bush', 'George Washington','Thomas Jefferson', 'Kanye West']
	  },
	 {image: "images/f_pierce.jpg", 
	  answer: 'Franklin Pierce',
	  options:['George Bush', 'Barack Obama','Thomas Jefferson', 'Franklin Pierce']
	  },
   	 {image: "images/t_roosevelt.jpg", 
	  answer: 'Thomas Roosevelt',
	  options:['George Bush', 'Thomas Roosevelt','Thomas Jefferson', 'Kanye West']
	 }
	];

var state = {	
	currentIndex : 0,
	currentScore : 0
};

/*==============================================
========FUNCTIONS THAT MODIFY STATE=============
===============================================*/


// function updateIndex(){
//   if(currentIndex() < 10)
//     state.currentIndex++;
// }


function checkAnswer(state, data, userChoice){ 
/**
Here userChoice is the li(option) that user will choose. 
$('li.options-li').on('click', function(event){
 event.stopPropagation(); //This is optional since we are using li class directly
 alert($(this).text());
})
***************/
	if(userChoice === data[state.currentIndex].answer){
		updateScoreValue(state, $('.score-section').find('.current-score'));

	}
	else {
		alert(`Sorry, it's wrong. The right answer is ${data[state.currentIndex].answer}. Please move to next question`);
	}
}


/*==============================================
========FUNCTIONS THAT RENDERS STATE=============
===============================================*/

function displayImage(state, data, index){
	var image = data[index].image;
	$('div.question-box').find('.img-display').attr('src',image);
}

function resetScoreValue(state, element){ //This func will reset the score to  0 when user hits Try again
	element.html(0);
}

function updateScoreValue(state, element){ //element - $('.score-section').find('.current-score')
	// var newScore = parseInt($('.current-score').text()) + 1;
	element.html(state.currentScore+=1);
}


function displayQuestionNumber(index){ //updates the question number in the nav bar
var updatedQuestionVal;
 updatedQuestionVal = index + 1;
	if(updatedQuestionVal<10) {	
		element = $('span.question-number');
		element.html(updatedQuestionVal);
	  }
	else if(updatedQuestionVal===10){
	  element.html('End of Quiz');
	  $('section .next-question').addClass('hidden');
	 }
}


function displayOptions(state, data, index){ //Function Renders the 4 options on the page
	displayQuestionNumber(index);
    var innerHTML;
	innerHTML = data[index].options;
	$('ul.options .options-li').remove();
	 for(var i =0; i < innerHTML.length; i++){
		$('ul.options').append('<li class="options-li">' + innerHTML[i] + '</li>');
	}
}


function nextQuestion(state){ 

	++state.currentIndex;
	// $('section .next-question').removeClass('hidden');
}

function finalScore(state){
	var element = $('.final-score-display')
	element.html(state.currentScore);
}

/*==============================================
=================EVENT LISTENERS================
===============================================*/

function userSelection(){
	$('li.options-li').on('click', function(event){
			event.stopPropagation();
			var userChoice = $(this).html();
			checkAnswer(state, quiz, userChoice);
			$('section .next-question').removeClass('hidden');
			$('li.options-li').unbind('click'); //Unbind will stop the user from clicking the option AGAIN!
			if(state.currentIndex===9){
				$('div.final-score-box').removeClass('hidden');
				finalScore(state);
				$('nav.question-display-count').addClass('hidden'); //To make styling visible
				$('div.ques-box-container').addClass('hidden'); //To make styling visible
				$('section.score-section').addClass('hidden'); 
				$('button.try-again').on('click', function(){
					state.currentIndex = 0;
					resetScoreValue(state, $('.score-section').find('.current-score'));
					$('div.final-score-box').addClass('hidden');
					$('div.quiz-container').slideDown()
				})
			}
	})
}

function clickNext(){
		$('button.next-question').on('click', function(){
			$('section .next-question').addClass('hidden');
			nextQuestion(state);
			displayImage(state, quiz, state.currentIndex);
			displayOptions(state, quiz, state.currentIndex);
			userSelection();
		});
	}


function startQuiz(){ //Function triggers when user hits the Start Quiz Button.
	$('.start-quiz-button').on('click', function(){
		state.currentIndex = 0;
		state.currentScore = 0;
		$('div.quiz-container').slideUp(400); //To make it visible
		$('section .next-question').addClass('hidden');
		$('nav.question-display-count').removeClass('hidden'); //To make styling visible
		$('div.ques-box-container').removeClass('hidden'); //To make styling visible
		$('section.score-section').removeClass('hidden'); //To make styling visible
		displayImage(state, quiz, state.currentIndex);
		displayOptions(state, quiz, state.currentIndex);
		userSelection();//calls the userSelection function when user starts the quiz
	});
}



$('document').ready(function(){
	startQuiz();
	clickNext();
});





































